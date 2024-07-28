import React, { useEffect, useState, createContext } from "react";
import { educationModules } from "./data/education-module-data.json";
import { painInjectionModules } from "./data/pain-injection-module-data.json";
import { educationPrograms } from "./data/education-programs-data.json";
import {
  getEducationModuleCompletions,
  postEducationModule,
  patchCompleteSkippedEducationModule,
} from "./education.service";
import { formatBackendCreatedAtDate } from "../../utils";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
  const [educationProgram, setEducationProgram] = useState(1);
  const [educationProgress, setEducationProgress] = useState(1);
  const [currentModule, setCurrentModule] = useState({});
  const [educationIntroStep, setEducationIntroStep] = useState(0);
  const [educationModuleCompletionData, setEducationModuleCompletionData] =
    useState([]);
  const [injectionModuleType, setInjectionModuleType] = useState(null);
  const educationProgramLength =
    educationPrograms[educationProgram - 1].educationModuleIds;
  const completedAllEducationModules =
    educationProgress > educationProgramLength;
  const lastCompletedEducationModule = educationModuleCompletionData[0];
  const lastEducationModuleId = lastCompletedEducationModule?.module_id;
  const lastCompletedEducationModuleDate = formatBackendCreatedAtDate(
    lastCompletedEducationModule?.created_at
  );

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
    let module;
    if (educationProgress === 1 && injectionModuleType) {
      module = painInjectionModules[injectionModuleType]
    } else {
      module = educationModules.find(
        (unit) =>
          unit.id ===
          educationPrograms[educationProgram - 1].educationModuleIds[
            educationProgress - 1
          ]
      );
    }

    if (module) {
      setCurrentModule(module);
    }
  }, [educationProgress, injectionModuleType]);

  const loadEducationMouleCompletions = async () => {
    const data = await getEducationModuleCompletions(uid);
    setEducationModuleCompletionData(data);
  };

  const completeModule = async (uid) => {
    try {
      const module = {
        module_id: currentModule.id,
        status: 0,
      };
      const data = await postEducationModule(uid, module);
      setEducationModuleCompletionData((prevCompleted) => [
        data,
        ...prevCompleted,
      ]);
      setTimeout(() => {
        setEducationProgress(educationProgress + 1);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const skipModule = async (uid) => {
    try {
      const module = {
        module_id: currentModule.id,
        status: 1,
      };
      const data = await postEducationModule(uid, module);
      setEducationModuleCompletionData((prevCompleted) => [
        data,
        ...prevCompleted,
      ]);
      setTimeout(() => {
        setEducationProgress(educationProgress + 1);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const sortPatchCompleteSkippedEducationModule = (data) => {
    const editedEducationModuleDate = educationModuleCompletionData.filter(
      (module) => module.id !== data.id
    );
    const newCompletedModuleData = [data, ...editedEducationModuleDate];
    const sortedData = newCompletedModuleData.sort((a, b) => a.id - b.id);
    return sortedData;
  };

  const completeEducationSkippedUnit = async (unitId) => {
    try {
      const skippedModule = educationModuleCompletionData.find(
        (module) => module.module_id === unitId
      );
      const data = await patchCompleteSkippedEducationModule(skippedModule.id);
      const refinedData = sortPatchCompleteSkippedEducationModule(data);
      setEducationModuleCompletionData(refinedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EducationContext.Provider
      value={{
        loadEducationMouleCompletions,
        setEducationProgram,
        setEducationProgress,
        currentModule,
        completeModule,
        educationIntroStep,
        setEducationIntroStep,
        educationModuleCompletionData,
        completeEducationSkippedUnit,
        educationProgress,
        skipModule,
        shorterProgram,
        additionalJournals,
        moodJournalReady,
        completedAllEducationModules,
        lastCompletedEducationModule,
        lastEducationModuleId,
        lastCompletedEducationModuleDate,
        setInjectionModuleType,
        injectionModuleType,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};
