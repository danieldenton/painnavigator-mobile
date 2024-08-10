import React, { useState, createContext } from "react";
import { patchUser } from "./profile-service";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [changes, setChanges] = useState("");
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
  const cancelEdits = () => {
    setReviewProfile(userInfo);
    setChanges("");
  };

  const completeProfile = (uid) => {
    const profile = {
      ...profileData,
      profile_status: 1,
      phone: postPhoneFormat(profileData.phone),
      dob: profileData.dob,
    };
    updateProfile(uid, profile);
  };

  const postPhoneFormat= (formattedNumber) => {
    const cleaned = formattedNumber.replace(/\D/g, '');
    return `+1${cleaned}`;
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
    setProfileStep(0);
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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
