import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { movementModules } from "./movement-modules-data.json";
import { movementVideos } from "./movement-videos-data.json";
import { formatBackendCreatedAtDate } from "../../utils";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
  const [currentModule, setCurrentModule] = useState({});
  const [currentVideo, setCurrentVideo] = useState({});
  const [completedMovementVideos, setCompletedMovementVideos] = useState([]);
  const [skippedMovementVideos, setSkippedMovementVideos] = useState([]);
  const [savedMovementVideos, setSavedMovementVideos] = useState([]);
  const [completedVideos, setCompletedVideos] = useState([]);
  const numOfCompletedVideos = completedVideos?.length;
  const playlistLength = currentModule.videos?.length;
  const [moduleComplete, setModuleComplete] = useState(false);
  const [lastModuleCompleted, setLastModuleCompleted] = useState({
    moduleId: null,
    dateCompleted: null,
  });
  const [isMovement, setIsMovement] = useState(false);
  const [movementProgram, setMovementProgram] = useState(null);
  const movementProgramModules = movementProgram
    ? movementModules.find((module) => module.id === movementProgram)
    : null;
  const movementModulesComplete = currentModule?.id < 37;
  const movementProgress = currentModule.id;

  useEffect(() => {
    if (completedVideos.length > 0) {
      if (completedVideos.length === playlistLength) {
        const lastMovementModuleIndex = currentModule.id - 1;
        readyNextModule(lastMovementModuleIndex);
        setModuleComplete(true);
      } else {
        readyNextVideo();
      }
    }
  }, [completedVideos]);

  function readyNextModule(lastMovementModuleIndex, date) {
    setLastModuleCompleted({
      moduleId: lastMovementModuleIndex + 1,
      dateCompleted: date,
    });

    const nextMovementModule =
      movementProgramModules.modules[lastMovementModuleIndex + 1];
    setCurrentModule(nextMovementModule);
    setCompletedVideos([]);
  }

  function readyNextVideo() {
    for (let i = 0; i < currentModule.videos.length; i++) {
      if (!completedVideos.includes(currentModule.videos[i])) {
        const nextVideo = movementVideos.find(
          (video) => video.id === currentModule.videos[i]
        );
        setCurrentVideo(nextVideo);
      }
    }
  }

  function readyUnfinishedMovementModule(
    lastMovementModule,
    lastMovementModuleCompletions
  ) {
    setCurrentModule(lastMovementModule);
    const completedVideoIds = lastMovementModuleCompletions.map(
      (completion) => completion.attributes.video_id
    );
    const completedVideoIdsInOrder = completedVideoIds.reverse();
    setCompletedVideos(completedVideoIdsInOrder);
  }

  async function parseMovementProgress(data) {
    await data;
    if (data.length !== 0) {
      const reversedData = data.reverse();
      const lastMovementCompletion = reversedData[0];

      const lastMovementModule = movementProgramModules.modules.find(
        (module) => module.id === lastMovementCompletion.attributes.module_id
      );
      const lastMovementModuleCompletionDate = formatBackendCreatedAtDate(
        lastMovementCompletion.attributes.created_at
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
        readyNextModule(
          lastMovementModuleIndex,
          lastMovementModuleCompletionDate
        );
      } else {
        readyUnfinishedMovementModule(
          lastMovementModule,
          lastMovementModuleCompletions
        );
      }
    } else if (movementProgram != null) {
      setCurrentModule(movementProgramModules.modules[0]);
    } else {
      setCurrentModule(movementModules[0].modules[0]);
    }
  }

  function parseMovementVideoCompletions(data) {
    if (data.length !== 0) {
      const completedVideoData = data.filter(
        (completion) => completion.attributes.status === "completed"
      );
      const completedVideoIds = completedVideoData.map((completion) => {
        if (completion.attributes.video_id) {
          return completion.attributes.video_id;
        }
      });
      setCompletedMovementVideos(completedVideoIds);
      const skippedVideoData = data.filter(
        (completion) => completion.attributes.status === "skipped"
      );
      const editedSkippedVideoData = skippedVideoData.map((completion) => {
        if (completion.attributes.video_id) {
          return {
            id: completion.id,
            video_id: completion.attributes.video_id,
          };
        }
      });
      setSkippedMovementVideos(editedSkippedVideoData);
    }
  }

  async function getMovementModuleCompletions(uid) {
    try {
      const response = await axios.get(
        `${API_URL}/api/v2/movement_module_completions?uid=${uid}`
      );
      parseMovementProgress(response.data.data);
      parseMovementVideoCompletions(response.data.data);
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

  const completeVideo = (uid) => {
    if (!completedVideos.includes(currentVideo.id)) {
      setCompletedVideos([...completedVideos, currentVideo.id]);
      const completed = 0;
      const completion = {
        module_id: currentModule.id,
        video_id: currentVideo.id,
        status: completed,
      };
      postMovementModuleCompletion(completion, uid);
    }
  };

  const skipVideo = async (uid) => {
    const skipped = 1;
    const module = {
      module_id: currentModule.id,
      video_id: currentVideo.id,
      status: skipped,
    };
    setCompletedVideos([...completedVideos, currentVideo.id]);
    const response = await postMovementModuleCompletion(module, uid);
    return response;
  };

  function getPlaylistLength(videos) {
    if (videos) {
      const videoArray = videos.map((video) => {
        const the_video = movementVideos.find((item) => item.id === video);
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
  }

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
        movementProgram,
        movementProgramModules,
        setMovementProgram,
        getPlaylistLength,
        completeVideo,
        patchSkippedToCompleteMovementModuleCompletion,
        currentModule,
        currentVideo,
        setCurrentVideo,
        playlistLength,
        completedVideos,
        numOfCompletedVideos,
        moduleComplete,
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
        setModuleComplete,
        lastModuleCompleted,
        movementProgress,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};
