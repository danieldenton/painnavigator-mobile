import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  const [movementCompletionData, setMovementCompletionData] = useState(null);
  const [currentModule, setCurrentModule] = useState(movementModules[0]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedMovementVideos, setCompletedMovementVideos] = useState([]);
  const [skippedMovementVideos, setSkippedMovementVideos] = useState([]);
  const [savedMovementVideos, setSavedMovementVideos] = useState([]);
  const [playlistLength, setPlaylistLength] = useState(null);
  const [numOfVideosCompleted, setNumOfVideosCompleted] = useState(null);
  const [isMovement, setIsMovement] = useState(false);
  const [movementProgram, setMovementProgram] = useState(1);
  // const moduleComplete = numOfVideosCompleted === playlistLength : false
  const moduleComplete = false;

  // TODO below here is old. It needs to be dealt with
  const movementModulesComplete = currentModule?.id < 37;

  function parseMovementProgress(data) {
    if (data) {
      const lastDataIndex = data.length - 1;
      const lastMovementCompletion = data[lastDataIndex];
      const lastMovementModule = movementModules.find(
        (module) => module.id === lastMovementCompletion.attributes.module_id
      );
      const lastVideoIdCompleted = lastMovementCompletion.attributes.video_id;

      if (
        lastMovementModule.videos[lastMovementModule.videos.length - 1].id ===
        lastMovementCompletion.attributes.video_id
      ) {
        console.log(lastMovementModule.videos.length -1)
        setCurrentModule(
          movementModules[lastMovementCompletion.attributes.module_id]
        );
        setCurrentVideo(
          movementVideos.find(
            (video) => video.id === currentModule.videos[0].id
          )
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
              video.id ===
              currentModule.videos[indexOfLastVideoCompleted + 1].id
          )
        );
        setNumOfVideosCompleted(indexOfLastVideoCompleted + 1);
      }
    } else {
      console.log("not working");
      setCurrentModule(movementModules[0]);
      setCurrentVideo(
        movementVideos.find((video) => video.id === currentModule.videos[0].id)
      );
    }
    setPlaylistLength(currentModule.videos.length);
  }

  function parseMovementVideoCompletions(data) {
    if (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        if (data[i].attributes.status === "completed") {
          setCompletedMovementVideos(
            ...completedMovementVideos,
            data[i].attributes.video_id
          );
        } else if (data[i].attributes.status === "skipped") {
          setSkippedMovementVideos(
            ...skippedMovementVideos,
            data[i].attributes
          );
        } else {
          continue;
        }
      }
    }
  }

  async function getMovementModuleCompletions(uid) {
    console.log;
    try {
      const response = await axios.get(
        `${API_URL}/api/v2/movement_module_completions?uid=${uid}`
      );
      parseMovementProgress(response.data.data);
      // parseMovementVideoCompletions(response.data.data);
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
        getPlaylistLength,
        getMovementModuleCompletions,
        completeVideo,
        completeSkippedMovementUnit,
        currentModule,
        currentVideo,
        playlistLength,
        numOfVideosCompleted,
        moduleComplete,
        resetModule,
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
        movementModulesComplete,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};
