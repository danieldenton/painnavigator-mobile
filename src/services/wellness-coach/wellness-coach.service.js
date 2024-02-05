import axios from 'axios';
import { API_URL } from "@env"

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