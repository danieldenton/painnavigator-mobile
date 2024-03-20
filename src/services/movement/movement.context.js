import React, { createContext, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { movementModules } from "./movement-modules-data.json";
import { movementVideos } from "./movement-videos-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  const [currentModule, setCurrentModule] = useState(movementModules[0]);
  const [currentVideo, setCurrentVideo] = useState(currentModule.videos[0].id);
  const [completedMovementVideos, setCompletedMovementVideos] = useState([]);
  const [skippedMovementVideos, setSkippedMovementVideos] = useState([]);
  const [savedMovementVideos, setSavedMovementVideos] = useState([]);
  const [completedVideos, setCompletedVideos] = useState([]);
  const numOfCompletedVideos = completedVideos.length;
  const playlistLength = currentModule.videos.length;
  const moduleComplete = numOfCompletedVideos === playlistLength;
  const [isMovement, setIsMovement] = useState(false);
  const incompleteVideos = currentModule.videos.filter(
    (video) => !completedVideos.includes(video.id)
  );
  const [movementProgram, setMovementProgram] = useState(1);

  const movementModulesComplete = currentModule?.id < 37;

  // function readyFirstModuleStart() {
  //   setCurrentModule(movementModules[0]);
  //   setCurrentVideo(
  //     movementVideos.find((video) => video.id === currentModule.videos[0].id)
  //   );
  // }

  function readyNextModule(lastMovementModuleIndex) {
    setCurrentModule(movementModules[lastMovementModuleIndex + 1]);
    setCompletedVideos([]);
    setCurrentVideo(
      movementVideos.find((video) => video.id === currentModule.videos[0].id)
    );
  }

  function readyNextVideo() {
    const lastCompletedVideoId = completedVideos[0];
    const indexOfLastCompletedVideo = currentModule.videos.findIndex(
      (video) => video.id === lastCompletedVideoId
    );
    console.log(lastCompletedVideoId, indexOfLastCompletedVideo, completedVideos);
    setCurrentVideo(
      movementVideos.find(
        (video) =>
          video.id === currentModule.videos[indexOfLastCompletedVideo + 1].id
      )
    );
  }

  function readyUnfinishedMovementModule(
    lastMovementModule,
    lastMovementModuleCompletions
  ) {
    setCurrentModule(lastMovementModule);
    const completedVideoIds = lastMovementModuleCompletions.map(
      (completion) => completion.attributes.video_id
    );
    setCompletedVideos(completedVideoIds);
    readyNextVideo();
  }

  function parseMovementProgress(data) {
    if (data.length !== 0) {
      const reversedData = data.reverse();
      const lastMovementCompletion = reversedData[0];
      const lastMovementModule = movementModules.find(
        (module) => module.id === lastMovementCompletion.attributes.module_id
      );
      const lastMovementModuleCompletions = reversedData.filter(
        (completion) =>
          completion.attributes.module_id === lastMovementModule.id
      );
      const lastModuleComplete =
        lastMovementModule.videos.length ===
        lastMovementModuleCompletions.length;
      const lastMovementModuleIndex = lastMovementModule.id - 1;
      if (lastModuleComplete) {
        readyNextModule(lastMovementModuleIndex);
      } else {
        readyUnfinishedMovementModule(
          lastMovementModule,
          lastMovementModuleCompletions
        );
      }
    }
  }

  function parseMovementVideoCompletions(data) {
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
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
    if (moduleComplete) {
      setTimeout(() => {
        // setModuleComplete(false);
        // setCompletedVideos(0);
        console.log("advance");
        const lastMovementModuleIndex = currentModule.id - 1;
        readyNextModule(lastMovementModuleIndex);
      }, 1000);
    } else {
      setCompletedVideos([...completedVideos, currentVideo.id]);
      readyNextVideo();
    }
  };

  const completeVideo = (uid) => {
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

  const skipVideo = async (uid) => {
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

    const videosLength = videoArray.reduce(
      (previousVideoRange, currentVideoRange) =>
        previousVideoRange + currentVideoRange,
      0
    );

    return videosLength;
  }

  const resetModule = () => {};

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
        completedVideos,
        numOfCompletedVideos,
        incompleteVideos,
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
