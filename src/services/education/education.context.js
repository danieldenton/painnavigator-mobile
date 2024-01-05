import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { educationModules } from "../../features/education/data/education-module-data.json";
import { educationPrograms } from "../../features/education/data/education-programs-data.json";
import { AuthenticationContext } from "../authentication/authentication.context";
import { formatBackendCreatedAtDate, timeZonedTodaysDate } from "../../utils";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
  const [educationProgress, setEducationProgress] = useState(1);
  const [currentModule, setCurrentModule] = useState({});
  const [completedEducationModules, setCompletedEducationModules] = useState(
    []
  );
  const [skippedEducationModules, setSkippedEducationModules] = useState([]);
  const [
    lastCompletedEducationModuleDate,
    setLastCompletedEducationModuleDate,
  ] = useState(null);
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
      const response = await axios.get(
        `${API_URL}/api/v2/education_module_completions`,
        { uid: uid }
      );
      const data = response.data.data;
      const completions = data.map((completion) => {
        return completion.attributes;
      });

      const completed = completions.filter(
        (completion) => completion.status === "completed"
      );
      const completedModules = completed.map((mod) => {
        return mod.module_id;
      });
      const completedModulesDuplicatesRemoved = [...new Set(completedModules)];
      setCompletedEducationModules(completedModulesDuplicatesRemoved);

      const lastModuleDate = formatBackendCreatedAtDate(
        completed[0].created_at
      );
      setLastCompletedEducationModuleDate(lastModuleDate);

      const skipped = completions.filter(
        (completion) => completion.status === "skipped"
      );
      const skippedModules = skipped.map((mod) => {
        return mod.module_id;
      });
      const skippedModulesDuplicatesRemoved = [...new Set(skippedModules)];
      const skippedModulesCompletionsRemoved =
        skippedModulesDuplicatesRemoved.map((mod_id) => {
          if (!completedModules.includes(mod_id)) {
            return mod_id;
          }
        });
      setSkippedEducationModules(skippedModulesCompletionsRemoved);

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
    setLastCompletedEducationModuleDate(timeZonedTodaysDate);
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

  return (
    <EducationContext.Provider
      value={{
        getEducationModuleCompletions,
        currentModule,
        completeModule,
        completedEducationModules,
        completeEducationSkippedUnit,
        educationProgress,
        lastCompletedEducationModuleDate,
        setEducationProgress,
        setLastCompletedEducationModuleDate,
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
