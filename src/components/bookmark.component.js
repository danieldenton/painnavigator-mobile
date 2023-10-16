import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";
import * as Haptics from "expo-haptics";
import { track } from "@amplitude/analytics-react-native";
import { MovementContext } from "../services/movement/movement.context";

export const Bookmark = ({ id, trackEvent }) => {
  const { bookmarks, addToBookmarks, removeFromBookmarks, isMovement } =
    useContext(BookmarksContext);
  const { saveMovementModule } = useContext(MovementContext);
  const isBookmarked = bookmarks.find((b) => b === id);

  console.log(isMovement)

  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        isMovement
          ? saveMovementModule()
          : !isBookmarked
          ? (addToBookmarks(id), track(trackEvent))
          : removeFromBookmarks(id);
          
      }}
      testID={"bookmark"}
    >
      {isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
    </TouchableOpacity>
  );
};
