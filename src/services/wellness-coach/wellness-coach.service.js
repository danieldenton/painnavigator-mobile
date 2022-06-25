import axios from 'axios';
import { API_URL } from "@env"

export const getMessages = (uid, setMessages) => {
    axios.get(`${API_URL}/api/v1/get_conversation/${uid}`)
    .then( resp => {
        const newMessages = resp.data.data;
        const newMessagesAttributes = newMessages.map(message => message.attributes);
        //console.log(newMessages);
        setMessages(newMessagesAttributes); 
    })
    .catch(resp => console.log(resp))
};

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