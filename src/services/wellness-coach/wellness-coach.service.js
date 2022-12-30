import axios from 'axios';
import { API_URL } from "@env";

export const patchMessage = (uid) => {
    axios.patch(`${API_URL}/api/v1/mark_conversation_read/${uid}`)
    .then((response) => {
        console.log(response.data);
    });
};

export const postMessage = (message, setMessages) => {
    axios.post(`${API_URL}/api/v1/messages`, { body: message.body, sender_id: message.sender_id, recipient_id: message.recipient_id })
    .then((response) => {
        const newMessage = response.data.data;
        //console.log(newMessage);
        setMessages(prevMessages => (
            [
                ...prevMessages,
                newMessage.attributes
            ]
        ));
    });
};