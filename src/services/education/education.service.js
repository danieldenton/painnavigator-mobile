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
