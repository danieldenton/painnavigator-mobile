import axios from "axios";
import { API_URL } from "@env";

export const getSmartGoals = async (uid) => {
    try {
      const response = await axios.get(`${API_URL}/api/v2/smart_goals`, {
        params: { uid: uid },
      });
      const data = response.data.data.map((goal) => {
        return goal.attributes;
      });
      return data
    } catch (error) {
      console.error(error);
    }
  };