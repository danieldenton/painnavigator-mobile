import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";
import * as Haptics from 'expo-haptics';
import { track } from '@amplitude/analytics-react-native'

export const Bookmark = ({ id, trackEvent }) => {
    const { bookmarks, addToBookmarks, removeFromBookmarks } = useContext(BookmarksContext);
    const isBookmarked = bookmarks.find((b) => b === id)

    return (
        <TouchableOpacity
            onPress={() => {
                !isBookmarked ? (addToBookmarks(id), track(trackEvent)) : removeFromBookmarks(id);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
            testID={"bookmark"}
        >
           {isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />} 
        </TouchableOpacity>
    );
};