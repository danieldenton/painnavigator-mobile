import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { BookmarkIcon, BookmarkedIcon } from "../icons";
import { BookmarksContext } from "../services/bookmarks/bookmarks.context";
import * as Haptics from "expo-haptics";
import { MovementContext } from "../services/movement/movement.context";
import { AuthenticationContext } from "../services/authentication.context";
import { patchSavedMovementVideos } from "../services/movement/movement.service";

export const Bookmark = ({ id }) => {
  const { bookmarks, addToBookmarks, removeFromBookmarks } =
    useContext(BookmarksContext);
  const {
    saveMovementModule,
    unsaveMovementModule,
    savedMovementVideos,
    isMovement,
  } = useContext(MovementContext);
  const { uid } = useContext(AuthenticationContext);
  const isBookmarked = bookmarks?.includes(id);
  const isSavedMovement = savedMovementVideos?.includes(id);

  useEffect(() => {
    patchSavedMovementVideos(uid, savedMovementVideos);
  }, [savedMovementVideos]);

  return (
    <TouchableOpacity
      onPress={() => {
        isMovement
          ? isSavedMovement
            ? unsaveMovementModule(id)
            : saveMovementModule(id)
          : !isBookmarked
          ? addToBookmarks(id)
          : removeFromBookmarks(id);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      testID={"bookmark"}
    >
      {isMovement ? (
        isSavedMovement ? (
          <BookmarkedIcon />
        ) : (
          <BookmarkIcon />
        )
      ) : isBookmarked ? (
        <BookmarkedIcon />
      ) : (
        <BookmarkIcon />
      )}
    </TouchableOpacity>
  );
};
