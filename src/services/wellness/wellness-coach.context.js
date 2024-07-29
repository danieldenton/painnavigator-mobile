import React, { useEffect, useState, createContext } from "react";
import { getMessages, patchMessage, postMessage } from "./wellness-coach.service";

export const WellnessCoachContext = createContext();

export const WellnessCoachContextProvider = ({ children }) => {
  const [message, setMessage] = useState({
    recipient_id: "lIUG8ybEtuNPuir7cZi4l9EwRa83",
    body: "",
    status: 0,
  });
  const [messages, setMessages] = useState([]);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [wellnessCoachReminded, setWellnessCoachReminded] = useState(true);

  useEffect(() => {
    const messagesRecieved = messages?.filter(
      (message) => message.sender_id === 1
    );
    const unreadMessagesRecieved = messagesRecieved?.filter(
      (message) => message.status === "unread"
    );

    if (unreadMessagesRecieved.length > 0) {
      setHasUnreadMessages(true);
    } else {
      setHasUnreadMessages(false);
    }
  }, [messages]);

  const loadMessages = async (uid) => {
    const messages = await getMessages(uid);
    setMessages(messages);
  };

  const clearUnreadMessages = (uid) => {
    const newMessages = messages.map((message) =>
      message.status === "unread"
        ? {
            ...message,
            status: "read",
          }
        : message
    );
    setMessages(newMessages);
    patchMessage(uid);
  };

  const resetMessage = () => {
    setMessage({
      recipient_id: "lIUG8ybEtuNPuir7cZi4l9EwRa83",
      body: "",
      status: 0,
    });
  };

  const sendMessage = async (uid) => {
    const newMessage = {
      ...message,
      sender_id: uid,
    };
    const data = await postMessage(newMessage);
    setMessages((prevMessages) => [...prevMessages, data]);
    setTimeout(() => {
      resetMessage();
    }, 1000);
  };

  const writeMessage = (change) => {
    setMessage((message) => ({
      ...message,
      body: change,
    }));
  };

  return (
    <WellnessCoachContext.Provider
      value={{
        loadMessages,
        clearUnreadMessages,
        hasUnreadMessages,
        message,
        messages,
        sendMessage,
        setMessages,
        writeMessage,
        wellnessCoachReminded,
        setWellnessCoachReminded,
      }}
    >
      {children}
    </WellnessCoachContext.Provider>
  );
};
