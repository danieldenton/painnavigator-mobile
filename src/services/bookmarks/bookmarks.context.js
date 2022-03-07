import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookmarksContext = createContext();

export const BookmarksContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const saveBookmarks = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@bookmarks", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadBookmarks = async () => {
    try {
      const value = await AsyncStorage.getItem("@bookmarks");
      if (value !== null) {
        setBookmarks(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (module) => {
    setBookmarks([...bookmarks, module]);
  };

  const remove = (module) => {
    const newBookmarks = bookmarks.filter(
      (x) => x.moduleId !== module.moduleId
    );

    setBookmarks(newBookmarks);
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  useEffect(() => {
    saveBookmarks(bookmarks);
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addToBookmarks: add,
        removeFromBookmarks: remove,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};