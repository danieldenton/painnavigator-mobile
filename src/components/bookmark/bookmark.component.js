import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
//https://icons.expo.fyi/

import { BookmarksContext } from "../../services/bookmarks/bookmarks.context";

export const Bookmark = ({ moduleId }) => {
    const { bookmarks, addToBookmarks, removeFromBookmarks } = useContext(BookmarksContext);
    const isBookmarked = bookmarks.find((b) => b === moduleId)

    return (
        <TouchableOpacity
            onPress={() => !isBookmarked ? addToBookmarks(moduleId) : removeFromBookmarks(moduleId)}
        >
            <Ionicons 
                name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                size={24} 
                color="black" 
            />
        </TouchableOpacity>
    );
};