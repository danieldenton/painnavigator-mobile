import React, { createContext, useEffect, useState } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  const [movementCompletionData, setMovementCompletionData] = useState([]);
  const [currentModule, setCurrentModule] = useState(1);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedMovementVideos, setCompletedMovementVideos] = useState([]);
  const [skippedMovementVideos, setSkippedMovementVideos] = useState([]);
  const [savedMovementVideos, setSavedMovementVideos] = useState([]);
  const [playlistLength, setPlaylistLength] = useState(null);
  const [numOfVideosCompleted, setNumOfVideosCompleted] = useState(0);

  // TODO replace all movementProgress
  const [movementProgress, setMovementProgress] = useState(1);

  const [moduleComplete, setModuleComplete] = useState(false);

  // TODO below here is old. It needs to be dealt with
  const [completedVideos, setCompletedVideos] = useState(0);
  const movementModulesOnScreen = movementProgress < 36;

  const [lastMovement, setLastMovement] = useState(null);
  const [isMovement, setIsMovement] = useState(false);

  useEffect(() => {
    const lastDataIndex = movementCompletionData.length - 1;
    const lastMovementCompletion = movementCompletionData[lastDataIndex];
    const lastMovementModule = movementModules.find(
      (module) => module.id === lastMovementCompletion.module_id
    );
    if (
      lastMovementModule[lastMovementModule.length - 1].videos.id ===
      lastMovementCompletion.video_id
    ) {
      setCurrentModule(movementModules[lastMovementCompletion.module_id]);
      setCurrentVideo(
        movementVideos.find((video) => video.id === currentModule.videos[0].id)
      );
      setNumOfVideosCompleted(0);
    } else {
      setCurrentModule(movementModules[lastMovementCompletion.module_id - 1]);
      const indexOfLastVideoCompleted = currentModule.findIndex(
        (video) => video.id === lastMovementCompletion.video_id
      );
      setCurrentVideo(
        movementVideos.find(
          (video) =>
            video.id === currentModule.videos[indexOfLastVideoCompleted + 1].id
        )
      );
      setNumOfVideosCompleted(indexOfLastVideoCompleted + 1);
    }
    setPlaylistLength(currentModule.videos.length);
    parseMovementVideoCompletions(movementCompletionData);
  }, [movementCompletionData]);

  function parseMovementVideoCompletions(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].attributes.status === "completed") {
        setCompletedVideos(...completedVideos, data[i].attributes.video_id);
      } else if (data[i].attributes.status === "skipped") {
        setSkippedMovementVideos(...skippedMovementVideos, data[i].attributes);
      } else {
        continue;
      }
    }
  }

  async function getMovementModuleCompletions(uid) {
    try {
      const response = await axios.get(
        `${API_URL}/api/v2/movement_module_completions`,
        { uid: uid }
      );
      setMovementCompletionData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postMovementModuleCompletion(module, uid) {
    try {
      const response = await axios.post(
        `${API_URL}/api/v2/movement_module_completions`,
        { movement_module: module, uid: uid }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async function patchSkippedToCompleteMovementModuleCompletion(moduleId) {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v2/movement_module_completions/${moduleId}`,
        { movement_module: { status: 0 } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const advanceProgress = () => {};

  const completeVideo = () => {
    setCompletedVideos((prevCompleted) => prevCompleted + 1);
    if (!completedMovementVideos.includes(currentVideo.id)) {
      setCompletedMovementVideos((prevCompleted) => [
        ...prevCompleted,
        currentVideo.id,
      ]);
      const completed = 0;
      const module = {
        module_id: currentModule.id,
        status: completed,
      };
      postMovementModuleCompletion(module, uid);
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

  const skipVideo = () => {
    setCompletedVideos((prevCompleted) => prevCompleted + 1);
    if (!skippedMovementVideos.includes(currentVideo.id)) {
      setSkippedMovementVideos((prevCompleted) => [
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

  const completeMovementSkippedUnit = (unitId) => {
    if (!completedMovementVideos.includes(unitId)) {
      const newCompletedModules = [...completedMovementVideos, unitId];
      const sortedData = newCompletedModules.sort(function (a, b) {
        return a - b;
      });
      setCompletedMovementVideos(sortedData);
    }
    setSkippedMovementVideos((prevSkipped) =>
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

  const switchVideo = (videoId) => {
    const newVideoData = movementVideos.find((video) => video.id === videoId);
    setCurrentVideo(newVideoData);
  };

  const saveMovementModule = (id) => {
    setSavedMovementVideos((prevSaved) => [...prevSaved, id]);
  };

  const unsaveMovementModule = (id) => {
    setSavedMovementVideos((prevSaved) =>
      prevSaved.filter((video) => video !== id)
    );
  };

  return (
    <MovementContext.Provider
      value={{
        getMovementModuleCompletions,
        completeVideo,
        completedVideos,
        completeMovementSkippedUnit,
        currentModule,
        currentVideo,
        playlistLength,
        numOfVideosCompleted,
        lastMovement,
        moduleComplete,
        movementProgress,
        resetModule,
        setMovementProgress,
        setLastMovement,
        skipVideo,
        switchVideo,
        setCompletedMovementVideos,
        completedMovementVideos,
        setSkippedMovementVideos,
        skippedMovementVideos,
        setSavedMovementVideos,
        savedMovementVideos,
        saveMovementModule,
        unsaveMovementModule,
        isMovement,
        setIsMovement,
        movementModulesOnScreen,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};
