import React, { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { educationModules } from "../../features/education/data/education-module-data.json";
import { educationPrograms } from "../../features/education/data/education-programs-data.json";
import { AuthenticationContext } from "../authentication/authentication.context";

export const EducationContext = createContext();

export const EducationContextProvider = ({ children }) => {
  const [educationProgress, setEducationProgress] = useState(1);
  const [currentModule, setCurrentModule] = useState({});
  const [educationModuleCompletionData, setEducationModuleCompletionData] =
    useState([]);
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
  }, [educationModuleCompletionData]);

  const getEducationModuleCompletions = async (uid) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v2/education_module_completions`,
        { params: { uid: uid } }
      );
      const dataToBeMapped = response.data.data;
      const data = dataToBeMapped.map((completion) => {
        return completion.attributes;
      });
      setEducationModuleCompletionData(data);
      setEducationProgress(data[0].module_id + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const postEducationModule = async (uid, module) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v2/education_module_completions`,
        {
          uid: uid,
          education_module_completion: module,
        }
      );
      const data = response.data.data.attributes;
      setEducationModuleCompletionData((prevCompleted) => [
        data,
        ...prevCompleted,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const patchCompleteSkippedEducationModule = async (skippedModuleId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v2/education_module_completions/${skippedModuleId}`,
        { status: 0 }
      );
      const data = response.data.data.attributes;
      const editedEducationModuleDate = educationModuleCompletionData.filter(
        (module) => module.id !== data.id
      );
      const newCompletedModuleData = [data, ...editedEducationModuleDate];
      const sortedData = newCompletedModuleData.sort((a, b) => a.id - b.id);
      setEducationModuleCompletionData(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const completeModule = () => {
    const module = {
      module_id: currentModule.id,
      status: 0,
    };
    postEducationModule(uid, module);
    setEducationProgress(educationProgress + 1);
  };

  const skipModule = () => {
    const module = {
      module_id: currentModule.id,
      status: 1,
    };
    postEducationModule(uid, module);
    setEducationProgress(educationProgress + 1);
  };

  const completeEducationSkippedUnit = (unitId) => {
    const skippedModule = educationModuleCompletionData.find(
      (module) => module.module_id === unitId
    );
    patchCompleteSkippedEducationModule(skippedModule.id);
  };

  return (
    <EducationContext.Provider
      value={{
        getEducationModuleCompletions,
        setEducationProgress,
        currentModule,
        completeModule,
        educationModuleCompletionData,
        completeEducationSkippedUnit,
        educationProgress,
        skipModule,
        shorterProgram,
        additionalJournals,
        moodJournalReady,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};
