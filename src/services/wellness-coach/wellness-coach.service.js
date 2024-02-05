import axios from 'axios';
import { API_URL } from "@env"

export async function getMessages(uid, setMessages) {
    try {
      const response = await axios.get(`${API_URL}/api/v1/messages/${uid}`);
      const data = response.data.data.map((message) => message.attributes)
      setMessages(data)
    } catch (error) {
      console.error(error);
    }
  }

export const patchMessage = (uid) => {
    axios.patch(`${API_URL}/api/v1/mark_conversation_read/${uid}`)
    .then((response) => {
    });
};

export async function postMessage(message, setMessages) {
    try {
        const response = await axios.post(`${API_URL}/api/v1/messages`, { body: message.body, sender_id: message.sender_id, recipient_id: message.recipient_id });
        const data = response.data.data.attributes;
        setMessages(prevMessages => (
            [
                ...prevMessages,
                data
            ]
        ));
    } catch (error) {
        console.error(error);
    }
};