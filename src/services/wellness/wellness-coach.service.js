import axios from "axios";
import { API_URL } from "@env";

export async function getMessages(uid) {
  try {
    const response = await axios.get(`${API_URL}/api/v1/messages/${uid}`);
    const data = response.data.data.map((message) => message.attributes);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const patchMessage = async (uid) => {
  try {
    const response = axios.patch(
      `${API_URL}/api/v1/mark_conversation_read/${uid}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export async function postMessage(newMessage) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/messages`, {
      body: newMessage.body,
      sender_id: newMessage.sender_id,
      recipient_id: newMessage.recipient_id,
    });
    const data = response.data.data.attributes;
    return data
  } catch (error) {
    console.error(error);
  }
}
