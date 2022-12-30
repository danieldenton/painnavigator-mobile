import React, { useEffect, useState, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { patchMessage, postMessage } from "./wellness-coach.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const WellnessCoachContext = createContext();

export const WellnessCoachContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
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
        patchMessage(user.user.uid);
    };

    const loadMessages = async () => {
        try {
            const value = await AsyncStorage.getItem("@messages");
            if (value !== null) {
            setMessages(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading messages", e);
        }
    };

    const resetMessage = () => {
        setMessage({
            recipient_id: "lIUG8ybEtuNPuir7cZi4l9EwRa83",
            body: "",
            status: 0
        }); 
    };

    const saveMessages = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@messages", jsonValue);
        } catch (e) {
          console.log("error storing messages", e);
        }
    };

    const sendMessage = () => {
        const newMessage = {
            ...message,
            sender_id: user.user.uid
        };
        console.log(newMessage);
        postMessage(newMessage, setMessages);
        setTimeout(() => {resetMessage()}, 1000);
    };

    const writeMessage = (change) => {
        setMessage(message => ({
            ...message,
            body: change
        }));
    };

    useEffect(() => {
        loadMessages();
      }, []);
    
    useEffect(() => {
        saveMessages(messages);
    }, [messages]);

    return (
        <WellnessCoachContext.Provider
            value={{
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