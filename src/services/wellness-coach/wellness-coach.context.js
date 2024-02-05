import React, { useEffect, useState, createContext, useContext } from "react";
import axios from 'axios';
import { API_URL } from "@env"
import { patchMessage, postMessage } from "./wellness-coach.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const WellnessCoachContext = createContext();

export const WellnessCoachContextProvider = ({ children }) => {
    const { uid } = useContext(AuthenticationContext);
    const [message, setMessage] = useState({
        recipient_id: "lIUG8ybEtuNPuir7cZi4l9EwRa83",
        body: "",
        status: 0
    });
    const [messages, setMessages] = useState([]);
    const [hasUnreadMessages, setHasUnreadMessages] = useState(false);

    useEffect(() => {
        const messagesRecieved = messages.filter(message => message.sender_id === 1);
        const unreadMessagesRecieved = messagesRecieved.filter(message => message.status === "unread");
        
        if (unreadMessagesRecieved.length > 0) {
            setHasUnreadMessages(true);
        } else {
            setHasUnreadMessages(false);
        }
    }, [messages]);


   async function getMessages() {
        try {
          const response = await axios.get(`${API_URL}/api/v1/messages/${uid}`);
          const data = response.data.data.map((message) => message.attributes)
          setMessages(data)
        } catch (error) {
          console.error(error);
        }
      }

    const clearUnreadMessages = () => {
        const newMessages = messages.map(message => message.status === "unread" ?
            {
                ...message,
                status: "read"
            }
            :
            message
        );

        setMessages(newMessages);
        patchMessage(uid);
    };

    const resetMessage = () => {
        setMessage({
            recipient_id: "lIUG8ybEtuNPuir7cZi4l9EwRa83",
            body: "",
            status: 0
        }); 
    };

    const sendMessage = () => {
        const newMessage = {
            ...message,
            sender_id: uid
        };
        postMessage(newMessage, setMessages);
        setTimeout(() => {resetMessage()}, 1000);
    };

    const writeMessage = (change) => {
        setMessage(message => ({
            ...message,
            body: change
        }));
    };

    return (
        <WellnessCoachContext.Provider
            value={{
                getMessages,
                clearUnreadMessages,
                hasUnreadMessages,
                message,
                messages,
                sendMessage,
                setMessages,
                writeMessage
            }}
        >
            {children}
        </WellnessCoachContext.Provider>
    );
};