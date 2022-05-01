import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";

export const Bookmark = ({ id }) => {
    const { bookmarks, addToBookmarks, removeFromBookmarks } = useContext(BookmarksContext);
    const isBookmarked = bookmarks.find((b) => b === id)

    return (
        <TouchableOpacity
            onPress={() => !isBookmarked ? addToBookmarks(id) : removeFromBookmarks(id)}
        >
           {isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />} 
        </TouchableOpacity>
    );
};