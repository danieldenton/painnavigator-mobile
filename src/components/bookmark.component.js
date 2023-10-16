import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";
import * as Haptics from "expo-haptics";
import { track } from "@amplitude/analytics-react-native";
import { MovementContext } from "../services/movement/movement.context";

export const Bookmark = ({ id, trackEvent }) => {
  const { bookmarks, addToBookmarks, removeFromBookmarks, isMovement } =
    useContext(BookmarksContext);
  const { saveMovementModule, unsaveMovementModule, savedMovementUnits } =
    useContext(MovementContext);
  const isBookmarked = bookmarks.find((b) => b === id);
  let isSavedMovement = savedMovementUnits.includes(id);

  // useEffect(() => {
  //   isSavedMovement = savedMovementUnits.includes(id);
  // }, [savedMovementUnits])



  return (
    <TouchableOpacity
      onPress={() => {
        console.log(isSavedMovement)
        isMovement
          ? isSavedMovement
            ? unsaveMovementModule()
            : saveMovementModule()
          : !isBookmarked
          ? (addToBookmarks(id), track(trackEvent))
          : removeFromBookmarks(id);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      testID={"bookmark"}
    >
      {isSavedMovement || isBookmarked ? <BookmarkedIcon /> : <BookmarkIcon />}
    </TouchableOpacity>
  );
};
