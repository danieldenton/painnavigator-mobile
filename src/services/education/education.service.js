import axios from "axios";
import { API_URL } from "@env";

export const getEducationModuleCompletions = async (uid) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v2/education_module_completions`,
      { params: { uid: uid } }
    );
    const dataToBeMapped = response.data.data;
    const data = dataToBeMapped.map((completion) => {
      return completion.attributes;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postEducationModule = async (uid, module) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/v2/education_module_completions`,
      {
        uid: uid,
        education_module_completion: module,
      }
    );
    const data = response.data.data.attributes;
    return data;
  } catch (error) {
    console.error(error);
  }
};
