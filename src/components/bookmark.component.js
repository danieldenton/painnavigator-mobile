import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";
import * as Haptics from "expo-haptics";
import { track } from "@amplitude/analytics-react-native";
import { MovementContext } from "../services/movement/movement.context";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { patchSavedMovementUnits } from "../services/movement/movement.service";

export const Bookmark = ({ id, trackEvent }) => {
  const { bookmarks, addToBookmarks, removeFromBookmarks } =
    useContext(BookmarksContext);
  const { saveMovementModule, unsaveMovementModule, savedMovementUnits, isMovement } =
    useContext(MovementContext);
    const { uid } = useContext(AuthenticationContext)
  const isBookmarked = bookmarks.includes(id);
  const isSavedMovement = savedMovementUnits.includes(id);

  useEffect(() => {
    patchSavedMovementUnits(uid, savedMovementUnits);
  }, [savedMovementUnits])

  return (
    <TouchableOpacity
      onPress={() => {
        isMovement
          ? isSavedMovement
            ? unsaveMovementModule(id)
            : (saveMovementModule(id), track(trackEvent))
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
