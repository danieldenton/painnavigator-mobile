import axios from 'axios';
import { baseUrl } from '../../infrastructure/config';

export const getMessages = (recipient_id, setMessages) => {
    axios.get(`${baseUrl}/api/v1/get_conversation/${recipient_id}`)
    .then( resp => {
        const newMessages = resp.data.data;
        const newMessagesAttributes = newMessages.map(message => message.attributes);
        //console.log(newMessages);
        setMessages(newMessagesAttributes); 
    })
    .catch(resp => console.log(resp))
};

export const patchMessage = (recipient_id) => {
    axios.patch(`${baseUrl}/api/v1/mark_conversation_read/${recipient_id}`)
    .then((response) => {
        console.log(response.data);
    });
};

export const postMessage = (message, setMessages) => {
    axios.post(`${baseUrl}/api/v1/messages`, { message: message })
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