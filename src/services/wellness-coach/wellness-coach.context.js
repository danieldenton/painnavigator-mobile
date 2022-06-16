import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMessages, patchMessage, postMessage } from "./wellness-coach.service";

export const WellnessCoachContext = createContext();

export const WellnessCoachContextProvider = ({ children }) => {
    const [recipientId, setRecipientId] = useState(1);
    const [userId, setUserId] = useState(10);
    const [message, setMessage] = useState({
        sender_id: userId,
        recipient_id: recipientId,
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

    useEffect(() => {
        checkForNewMessages();
    }, []);
    
    const checkForNewMessages = () => {
        getMessages(userId, setMessages);  
    };

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
        patchMessage(userId);
    };

    const loadMessages = async () => {
        try {
            const value = await AsyncStorage.getItem("@messages");
            if (value !== null) {
            setMessages(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading", e);
        }
    };

    const resetMessage = () => {
        setMessage({
            sender_id: 2,
            recipient_id: recipientId,
            body: "",
            status: 0
        }); 
    };

    const saveMessages = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@messages", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
    };

    const sendMessage = () => {
        postMessage(message, setMessages);
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
                writeMessage
            }}
        >
            {children}
        </WellnessCoachContext.Provider>
    );
};