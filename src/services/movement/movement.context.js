import React, { createContext, useContext, useEffect, useState } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";
import {
  patchSavedMovementUnits,
  patchSkippedMovementUnits,
  patchCompletedMovementUnits,
  post,
} from "./movement.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { track } from "@amplitude/analytics-react-native";
import { MOVEMENT_UNIT_EVENTS } from "../../amplitude-events";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  const [movementProgress, setMovementProgress] = useState(1);
  const [currentModule, setCurrentModule] = useState(
    movementModules.find((module) => module.id === movementProgress)
  );
  const [moduleComplete, setModuleComplete] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  const [completedVideos, setCompletedVideos] = useState(0);
  const [completedMovementModules, setCompletedMovementModules] =
    useState(null);
  const [skippedMovementModules, setSkippedMovementModules] = useState(null);
  const [savedMovementUnits, setSavedMovementUnits] = useState([]);
  const [lastMovement, setLastMovement] = useState(null);
  const [isMovement, setIsMovement] = useState(false);
  const { uid } = useContext(AuthenticationContext);

  useEffect(() => {
    setCurrentModule(
      movementModules.find((module) => module.id === movementProgress)
    );
  }, [movementProgress]);

  useEffect(() => {
    const allVideosCompleted = Object.values(currentModule.videos).every(
      (value) => value.completed === true
    );

    if (allVideosCompleted) {
      setModuleComplete(true);
      advanceProgress();
      return;
    }

    const nextVideoId = currentModule.videos.filter(
      (video) => !video.completed
    )[0].id;
    const nextVideoData = movementVideos.find(
      (video) => video.id === nextVideoId
    );
    setCurrentVideo(nextVideoData);
  }, [currentModule]);

  const advanceProgress = () => {
    const STATUS_NOT_STARTED = 0;
    const module = {
      module_id: currentModule.id,
      status: STATUS_NOT_STARTED,
    };
    post(module, uid, setMovementProgress, setCurrentModule);
  };

  const completeVideo = () => {
    track(MOVEMENT_UNIT_EVENTS.COMPLETE_MOVEMENT_UNIT);
    setCompletedVideos((prevCompleted) => prevCompleted + 1);
    if (!completedMovementModules.includes(currentVideo.id)) {
      setCompletedMovementModules((prevCompleted) => [
        ...prevCompleted,
        currentVideo.id,
      ]);
    }

    const newVideos = currentModule.videos.map((video) =>
      video.id === currentVideo.id
        ? {
            ...video,
            completed: true,
          }
        : video
    );
    setCurrentModule({ ...currentModule, videos: newVideos });
  };

  const completeSkippedUnit = (unitId) => {
    if (!completedMovementModules.includes(unitId)) {
      const newCompletedModules = [...completedMovementModules, unitId];
      const sortedData = newCompletedModules.sort(function (a, b) {
        return a - b;
      });
      setCompletedMovementModules(sortedData);
    }
    setSkippedMovementModules((prevSkipped) =>
      prevSkipped.filter((unit) => unit !== unitId)
    );
  };

  function getPlaylistLength(videos) {
    const videoArray = videos.map((video) => {
      const the_video = movementVideos.find((item) => item.id === video.id);
      const length = Math.ceil(the_video.length / 60);

      return length;
    });

    const videoLength = videoArray.reduce(
      (previousVideoRange, currentVideoRange) =>
        previousVideoRange + currentVideoRange,
      0
    );

    return videoLength;
  }

  const resetModule = () => {
    setTimeout(() => {
      setModuleComplete(false);
      setCompletedVideos(0);
    }, 1000);
  };

  const skipVideo = () => {
    setCompletedVideos((prevCompleted) => prevCompleted + 1);
    if (!skippedMovementModules.includes(currentVideo.id)) {
      setSkippedMovementModules((prevCompleted) => [
        ...prevCompleted,
        currentVideo.id,
      ]);
    }

    const newVideos = currentModule.videos.map((video) =>
      video.id === currentVideo.id
        ? {
            ...video,
            completed: true,
          }
        : video
    );
    setCurrentModule({ ...currentModule, videos: newVideos });
  };

  const switchVideo = (videoId) => {
    const newVideoData = movementVideos.find((video) => video.id === videoId);
    setCurrentVideo(newVideoData);
  };

  const saveMovementModule = (id) => {
    setSavedMovementUnits((prevSaved) => [...prevSaved, id]);
  };

  const unsaveMovementModule = (id) => {
    setSavedMovementUnits((prevSaved) =>
      prevSaved.filter((video) => video !== id)
    );
  };

  useEffect(() => {
    if (skippedMovementModules) {
      patchSkippedMovementUnits(uid, skippedMovementModules);
    }
  }, [skippedMovementModules]);

  useEffect(() => {
    if (completedMovementModules) {
      patchCompletedMovementUnits(uid, completedMovementModules);
    }
  }, [completedMovementModules]);

  return (
    <MovementContext.Provider
      value={{
        completeVideo,
        completedVideos,
        completeSkippedUnit,
        currentModule,
        currentVideo,
        getPlaylistLength,
        lastMovement,
        moduleComplete,
        movementProgress,
        resetModule,
        setMovementProgress,
        setLastMovement,
        skipVideo,
        switchVideo,
        setCompletedMovementModules,
        completedMovementModules,
        setSkippedMovementModules,
        skippedMovementModules,
        setSavedMovementUnits,
        savedMovementUnits,
        saveMovementModule,
        unsaveMovementModule,
        isMovement,
        setIsMovement,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};
