import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "@env";

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
    if (messages.length === 2) {

    }
    const messagesRecieved = messages.filter(
      (message) => message.sender_id === 1
    );
    const unreadMessagesRecieved = messagesRecieved.filter(
      (message) => message.status === "unread"
    );

    if (unreadMessagesRecieved.length > 0) {
      setHasUnreadMessages(true);
    } else {
      setHasUnreadMessages(false);
    }
  }, [messages]);

  async function getMessages(uid) {
    try {
      const response = await axios.get(`${API_URL}/api/v1/messages/${uid}`);
      const data = response.data.data.map((message) => message.attributes);
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  }

  const patchWellnessCoachReminded = async (uid) => {
    try {
      await axios.patch(`${API_URL}/api/v2/users/${uid}`, {
        wellness_coach_reminded: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  const patchMessage = (uid) => {
    axios
      .patch(`${API_URL}/api/v1/mark_conversation_read/${uid}`)
      .then((response) => {});
  };

  async function postMessage(newMessage) {
    try {
      const response = await axios.post(`${API_URL}/api/v1/messages`, {
        body: newMessage.body,
        sender_id: newMessage.sender_id,
        recipient_id: newMessage.recipient_id,
      });
      const data = response.data.data.attributes;
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (error) {
      console.error(error);
    }
  }

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

  const sendMessage = (uid) => {
    const newMessage = {
      ...message,
      sender_id: uid,
    };
    postMessage(newMessage);
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
        getMessages,
        postMessage,
        clearUnreadMessages,
        hasUnreadMessages,
        message,
        messages,
        sendMessage,
        setMessages,
        writeMessage,
        wellnessCoachReminded,
        setWellnessCoachReminded,
        patchWellnessCoachReminded
      }}
    >
      {children}
    </WellnessCoachContext.Provider>
  );
};
