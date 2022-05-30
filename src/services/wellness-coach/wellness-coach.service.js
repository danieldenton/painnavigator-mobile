import axios from 'axios';
import { baseUrl } from '../../infrastructure/config';

export const getMessages = (recipient_id, last_message_id, setMessages) => {
    axios.get(`${baseUrl}/api/v1/new_messages/?recipient_id=${recipient_id}&last_message_id=${last_message_id}`)
    .then( resp => {
        console.log(resp.data.data);
        const newMessages = resp.data.data;
        const newMessagesAttributes = newMessages.map(message => message.attributes);
        console.log(newMessages);
        //setMessages(prevMessages => (
            //[
                //...prevMessages,
                //...newMessagesAttributes
            //]
        //)); 
    })
    //.catch(resp => console.log(resp))
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