import axios from "axios";
import { API_URL } from "@env";

async function postUser(uid, onboardingData) {
    const userData = {
      uid: uid,
      ...onboardingData,
    };
    await axios.post(`${API_URL}/api/v2/users`, { user: userData });
  }

  const patchExpoPushToken = async () => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        expo_push_token: expoPushToken,
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function getUser() {
    try {
      const response = await axios.get(`${API_URL}/api/v2/users/${uid}`);
      const data = response.data.data.attributes;
      const eProgress = data.education_progress.education_progress
        ? data.education_progress.education_progress
        : data.education_progress.progress;
      setUserInfo(data.profile);
      setMovementProgram(data.movement_program);
      setEducationProgram(data.education_program);
      setEducationProgress(eProgress);
      setProfileComplete(data.profile.profile_status === 1);
      setCompletedProgram(data.completed_program === true);
      setLastDateOnApp(data.last_date_on_app);
      setWellnessCoachReminded(data.wellness_coach_reminded);
      setAppUpdateRequired(data.app_update_required);
    } catch (error) {
      console.error(error);
    }
  }

  const patchLastDateOnAppAndAppVersion = async () => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        last_date_on_app: timeZonedTodaysDate,
        app_version: "2.0.7"
      });
    } catch (error) {
      console.error(error);
    }
  };

  const patchAppUpdateRequired = async () => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        app_update_required: false,
      });
    } catch (error) {
      console.error(error);
    }
  };
