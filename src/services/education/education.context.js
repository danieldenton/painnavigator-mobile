import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { educationModules } from "../../features/education/data/education-module-data.json";
import { educationPrograms } from "../../features/education/data/education-programs-data.json";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
  const [educationProgress, setEducationProgress] = useState(1);
  const [currentModule, setCurrentModule] = useState({});
  const [completedEducationModules, setCompletedEducationModules] = useState(
    []
  );
  const [skippedEducationModules, setSkippedEducationModules] = useState([]);
  const [lastCompletedModule, setLastCompletedModule] = useState(null);
  const { uid, educationProgram } = useContext(AuthenticationContext);

  const shorterProgram = educationProgram > 2 && educationProgram < 7;
  const additionalJournals =
    educationProgram === 2
      ? educationProgress > 15
      : shorterProgram
      ? educationProgress > 21
      : educationProgress > 24;
  const moodJournalReady =
    educationProgram === 2
      ? educationProgress > 17
      : shorterProgram
      ? educationProgress > 23
      : educationProgress > 26;

  useEffect(() => {
    const module = educationModules.find(
      (unit) =>
        unit.id ===
        educationPrograms[educationProgram - 1].educationModulesId[
          educationProgress - 1
        ]
    );
    if (module) {
      setCurrentModule(module);
    }
  }, [educationProgress]);

  const getEducationModuleCompletions = async (uid) => {
    try {
        const response = await axios.get(`${API_URL}/api/v2/education_module_completions`, { uid: uid })
        const data = response.data.data
        const completions = data.map((completion) => {
            return completion.attributes
        })
        setCompletedEducationModules(completions.filter((completion) => completion.status === "completed"))
        setSkippedEducationModules(completions.filter((completion) => completion.status === "skipped"))
    } catch (error) {
      console.error(error);
    }
  };

  // complete and skipped education module posting below

  const postEducationModule = async (uid, module) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v2/education_module_completions`,
        {
          uid: uid,
          education_module_completion: module,
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const completeModule = () => {
    const module = {
      module_id: currentModule.id,
      status: 0,
      education_progress: educationProgress,
    };
    setEducationProgress(educationProgress + 1);
    postEducationModule(uid, module);
    setCompletedEducationModules((prevCompleted) => [
      ...prevCompleted,
      currentModule.id,
    ]);
  };

  const skipModule = () => {
    const module = {
      module_id: currentModule.id,
      status: 1,
      education_progress: educationProgress,
    };
    postEducationModule(uid, module);
    if (!skippedEducationModules.includes(currentModule.id)) {
      setSkippedEducationModules((prevSkipped) => [
        ...prevSkipped,
        currentModule.id,
      ]);
    }
  };

  const patchCompleteSkippedEducationModule = async (uid, module) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v2/education_module_completions`,
        {
          uid: uid,
          education_module_completion: module,
        }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const completeEducationSkippedUnit = (unitId) => {
    const newCompletedModules = [...completedEducationModules, unitId];
    const sortedData = newCompletedModules.sort(function (a, b) {
      return a - b;
    });
    setCompletedEducationModules(sortedData);
    setSkippedEducationModules((prevSkipped) =>
      prevSkipped.filter((unit) => unit !== unitId)
    );
  };

  const saveCompletedEducationModules = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@completed_education_modules", jsonValue);
    } catch (e) {
      console.log("error storing completed_education_modules", e);
    }
  };

  const loadCompletedEducationModules = async () => {
    try {
      const value = await AsyncStorage.getItem("@completed_education_modules");
      if (value !== null) {
        setCompletedEducationModules(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading completed_education_modules", e);
    }
  };

  useEffect(() => {
    loadCompletedEducationModules();
  }, []);

  useEffect(() => {
    saveCompletedEducationModules(completedEducationModules);
  }, [completedEducationModules]);

  const saveSkippedEducationModules = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@skipped_education_modules", jsonValue);
    } catch (e) {
      console.log("error storing skipped_education_modules", e);
    }
  };

  const loadSkippedEdcuationModules = async () => {
    try {
      const value = await AsyncStorage.getItem("@skipped_education_modules");
      if (value !== null) {
        setSkippedEducationModules(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading skipped_education_modules", e);
    }
  };

  useEffect(() => {
    loadSkippedEdcuationModules();
  }, []);

  useEffect(() => {
    saveSkippedEducationModules(skippedEducationModules);
  }, [skippedEducationModules]);

  const saveLastCompletedModule = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@last_completed_education_module", jsonValue);
    } catch (e) {
      console.log("error storing last_completed_education_module", e);
    }
  };

  const loadLastCompletedModule = async () => {
    try {
      const value = await AsyncStorage.getItem(
        "@last_completed_education_module"
      );
      if (value !== null) {
        setLastCompletedModule(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading last_completed_education_module", e);
    }
  };

  useEffect(() => {
    loadLastCompletedModule();
  }, []);

  useEffect(() => {
    saveLastCompletedModule(lastCompletedModule);
  }, [lastCompletedModule]);

  return (
    <EducationContext.Provider
      value={{
        getEducationModuleCompletions,
        currentModule,
        completeModule,
        completedEducationModules,
        completeEducationSkippedUnit,
        educationProgress,
        lastCompletedModule,
        setEducationProgress,
        setLastCompletedModule,
        skipModule,
        skippedEducationModules,
        shorterProgram,
        additionalJournals,
        moodJournalReady,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};
