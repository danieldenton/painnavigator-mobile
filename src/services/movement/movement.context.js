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
  const [isMovement, setIsMovement] = useState(false);
  const [movementProgram, setMovementProgram] = useState(1);

  // TODO replace all movementProgress
  const [movementProgress, setMovementProgress] = useState(1);
  // TODO below here is old. It needs to be dealt with
  const movementModulesOnScreen = movementProgress < 36;

  useEffect(() => {
    const lastDataIndex = movementCompletionData.length - 1;
    const lastMovementCompletion = movementCompletionData[lastDataIndex];
    const lastMovementModule = movementModules.find(
      (module) => module.id === lastMovementCompletion.attributes.module_id
    );
    const lastVideoIdCompleted = lastMovementCompletion.attributes.video_id;

    if (
      lastMovementModule.videos[lastMovementModule.videos.length - 1].id ===
      lastMovementCompletion.attributes.video_id
    ) {
      setCurrentModule(
        movementModules[lastMovementCompletion.attributes.module_id]
      );
      setCurrentVideo(
        movementVideos.find((video) => video.id === currentModule.videos[0].id)
      );
      setNumOfVideosCompleted(0);
    } else {
      setCurrentModule(lastMovementModule);
      const indexOfLastVideoCompleted = currentModule.videos.findIndex(
        (video) => video.id === lastVideoIdCompleted
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
        setCompletedMovementVideos(
          ...completedMovementVideos,
          data[i].attributes.video_id
        );
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

  async function patchSkippedToCompleteMovementModuleCompletion(completionId) {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v2/movement_module_completions/${completionId}`,
        { movement_module: { status: 0 } }
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const advanceProgress = () => {
    if (numOfVideosCompleted === playlistLength) {
      setCurrentModule(movementModules[currentModule.id]);
      setCurrentVideo(
        movementVideos.find((video) => video.id === currentModule.videos[0].id)
      );
      setNumOfVideosCompleted(0);
    } else {
      setCurrentVideo(
        movementVideos.find(
          (video) => video.id === currentModule.videos[numOfVideosCompleted].id
        )
      );
      setNumOfVideosCompleted((numOfVideosCompleted) => {
        return numOfVideosCompleted + 1;
      });
    }
  };

  const completeVideo = () => {
    const completed = 0;
    const module = {
      module_id: currentModule.id,
      video_id: currentVideo.id,
      status: completed,
    };
    postMovementModuleCompletion(module, uid);
    if (!completedMovementVideos.includes(currentVideo.id)) {
      const newCompletedModules = [...completedMovementVideos, currentVideo.id];
      const sortedData = newCompletedModules.sort((a, b) => a.id - b.id);
      setCompletedMovementVideos(sortedData);
    }
    advanceProgress();
  };

  const skipVideo = async () => {
    const skipped = 1;
    const module = {
      module_id: currentModule.id,
      video_id: currentVideo.id,
      status: skipped,
    };
    const response = await postMovementModuleCompletion(module, uid);
    setSkippedVideos([...skippedMovementVideos, response.data.data.attributes]);
    advanceProgress();
  };

  const completeSkippedMovementUnit = (skippedMovementCompletion) => {
    patchSkippedToCompleteMovementModuleCompletion(
      skippedMovementCompletion.id
    );
    if (!completedMovementVideos.includes(skippedMovementCompletion.video_id)) {
      const newCompletedModules = [
        ...completedMovementVideos,
        skippedMovementCompletion.video_id,
      ];
      const sortedData = newCompletedModules.sort((a, b) => a.id - b.id);
      setCompletedMovementVideos(sortedData);
    }
    setSkippedMovementVideos((prevSkipped) =>
      prevSkipped.filter(
        (skippedUnit) => skippedUnit.id !== skippedMovementCompletion.id
      )
    );
  };

  //   const newVideos = currentModule.videos.map((video) =>
  //     video.id === currentVideo.id
  //       ? {
  //           ...video,
  //           completed: true,
  //         }
  //       : video
  //   );
  //   setCurrentModule({ ...currentModule, videos: newVideos });
  // };

  const resetModule = () => {
    setTimeout(() => {
      // setModuleComplete(false);
      // setCompletedVideos(0);
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
        completeSkippedMovementUnit,
        currentModule,
        currentVideo,
        playlistLength,
        numOfVideosCompleted,
        moduleComplete,
        movementProgress,
        resetModule,
        setMovementProgress,
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
