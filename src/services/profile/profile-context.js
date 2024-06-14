import React, { useState, createContext } from "react";
import { patchUser } from "./profile-service";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [changes, setChanges] = useState("");
  // userInfo set for testing
  const [userInfo, setUserInfo] = useState({});
  const [reviewProfile, setReviewProfile] = useState({});
  const [profileData, setProfileData] = useState({
    phone: "",
    dob: "",
    starting_pain_duration: "",
    gender: "",
    activity_level: "",
  });
  const [profileStep, setProfileStep] = useState(0);
  const [profileComplete, setProfileComplete] = useState(false);

  const cancelEdits = () => {
    setReviewProfile(userInfo);
    setChanges("");
  };

  const completeProfile = (uid) => {
    const profile = {
      ...profileData,
      profile_status: 1,
      phone: postPhoneFormat(profileData.phone),
      dob: dobFormat(profileData.dob),
    };
    updateProfile(uid, profile);
    //setTimeout(() => {resetProfileStep(false)}, 1000);
  };


  const postPhoneFormat = (p) => {
    if (p.startsWith("+1")) {
      return `${p.slice(0, 2)}(${p.slice(2, 5)})${p.slice(5, 8)}-${p.slice(8)}`;
    } else if (p.length === 10) {
      return "+1" + p;
    }
  };

  const dobFormat = (d) => {
    if (d.length === 8) {
      return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
    }
  };

  const changeProfileEntry = (change, state) => {
    setProfileData((journal) => ({
      ...journal,
      [state]: change,
    }));
  };

  const editProfile = (change, state) => {
    setReviewProfile((prevProfile) => ({
      ...prevProfile,
      [state]: change,
    }));
    setChanges(change);
  };
  const nextProfileStep = () => {
    setProfileStep((prevPage) => {
      return prevPage + 1;
    });
  };

  const previousProfileStep = () => {
    setProfileStep((prevPage) => {
      return prevPage - 1;
    });
  };

  const resetProfileStep = () => {
    setProfileData({
      phone: "",
      dob: "",
      starting_pain_duration: 0,
      gender: 0,
      activity_level: 0,
    });
    setProfileStep(1);
  };

  const saveEdits = (uid) => {
    updateProfile(uid, reviewProfile);
    setChanges("");
  };

  const updateProfile = (userId, data) => {
    patchUser(userId, data, setUserInfo, setProfileComplete);
  };


  return (
    <ProfileContext.Provider
      value={{
        cancelEdits,
        changes,
        changeProfileEntry,
        completeProfile,
        editProfile,
        nextProfileStep,
        previousProfileStep,
        profileComplete,
        profileData,
        profileStep,
        resetProfileStep,
        reviewProfile,
        saveEdits,
        setReviewProfile,
        setUserInfo,
        setProfileComplete,
        updateProfile,
        userInfo,
        postPhoneFormat,
        dobFormat,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
