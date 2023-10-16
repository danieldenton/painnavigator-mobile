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
  const { saveMovementModule, savedMovementUnits } = useContext(MovementContext);
  const isBookmarked = bookmarks.find((b) => b === id);
  const isSavedMovement = savedMovementUnits.find((m) => m === id)

  return (
    <TouchableOpacity
      onPress={() => {
        isMovement
          ? saveMovementModule()
          : !isBookmarked
          ? (addToBookmarks(id), track(trackEvent))
          : removeFromBookmarks(id);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      testID={"bookmark"}
    >
      {isBookmarked || isSavedMovement ? <BookmarkedIcon /> : <BookmarkIcon />}
    </TouchableOpacity>
  );
};
