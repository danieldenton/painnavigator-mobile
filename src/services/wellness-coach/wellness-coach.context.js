import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMessages, postMessage } from "./wellness-coach.service";

export const WellnessCoachContext = createContext();

export const WellnessCoachContextProvider = ({ children }) => {
    const [recipientId, setRecipientId] = useState(1);
    const [userId, setUserId] = useState(2);
    const [message, setMessage] = useState({
        sender_id: userId,
        recipient_id: recipientId,
        body: "",
        status: 0
    });
    const [messages, setMessages] = useState([
        {
            id: 0,
            body: "Hi Jessie! Welcome to Pain Navigator. My name’s Kelly and I’m here to help you get the most out of this program. Do you have any questions or comments you’d like to discuss?",
            recipient_id: 2,
            sender_id: 1,
            status: "unread",
            time_stamp: "Sat 10:00 AM"
        },
        {
            id: 2,
            body: "Hi Kelly! Thanks for the message. I don’t have any questions right now. ",
            recipient_id: 1,
            sender_id: 2,
            status: "unread",
            time_stamp: "Sat 10:30 AM"
        }
    ]);
    const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
    const [lastMessageId, setLastMessageId] = useState(0);

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
        //setTimeout(() => {checkForNewMessages(22)}, 3000);
    }, [])

    useEffect(() => {
        //const messagesRecieved = messages.filter(message => message.sender_id === 1);
        //const messagesRecievedIndex = messagesRecieved.length - 1;
        //const last_message_id = messagesRecieved[messagesRecievedIndex].id;
        //console.log(last_message_id);
        //setLastMessageId(last_message_id);
    }, [messages])
    
    const checkForNewMessages = (last_message_id) => {
        //const messagesRecieved = messages.filter(message => message.sender_id === 1);
        //const messagesRecievedIndex = messagesRecieved.length - 1;
        //const last_message_id = messagesRecieved[messagesRecievedIndex].id;

        getMessages(userId, last_message_id, setMessages); 
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