import React, { useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { VideoInfo } from "./video-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { NextUp } from "../../education/components/education-unit.styles";
import { Scroll } from "../../../components/scroll.component";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { SkipButton } from "./skip-button.component";
import { AuthenticationContext } from "../../../services/authentication.context";

export const MovementUnit = () => {
  const {
    completeVideo,
    numOfVideosCompleted,
    playlistLength,
    incompleteVideos,
    currentVideo,
    switchVideo,
    skipVideo,
  } = useContext(MovementContext);
  const { uid } =useContext(AuthenticationContext)
  const { source } = currentVideo;
  const [status, setStatus] = useState({});
  const [fullscreenStatus, setFullscreenStatus] = useState();
  const movementVideo = useRef(null);
  const allVideosCompleted = numOfVideosCompleted === playlistLength;
  const upNextList = incompleteVideos.filter(
    (video) => video.id !== currentVideo.id
  );

  const playlistTiles = upNextList.map((video, index) => (
    <PlaylistTile
      key={video.id}
      upNext={index === 0 && true}
      firstVideo={index === 0 && true}
      switchVideo={switchVideo}
      videoId={video.id}
    />
  ));

  function resetVideo() {
    if (!allVideosCompleted) {
      movementVideo.current.setStatusAsync({ positionMillis: 0 });
    }
  }

  useEffect(() => {
    movementVideo.current.setStatusAsync({ positionMillis: 0 });
  }, [switchVideo]);

  useEffect(() => {
    if (!status.didJustFinish) {
      return;
    }

    if (fullscreenStatus === 1) {
      if (allVideosCompleted) {
        movementVideo.current.dismissFullscreenPlayer();
      }
      setTimeout(() => {
        completeVideo();
      }, 1000);
    } else {
      completeVideo(uid);
    }
  }, [status.didJustFinish]);

  return (
    <>
      <VideoPlayer
        ref={movementVideo}
        source={source}
        status={status}
        setStatus={setStatus}
        setFullscreenStatus={setFullscreenStatus}
      />
      <SkipButton skipVideo={skipVideo} resetVideo={resetVideo} />
      <VideoInfo />
      {incompleteVideos.length > 1 && <NextUp />}
      <Scroll
        showsVerticalScrollIndicator={false}
        style={{ paddingRight: 16, paddingLeft: 16, paddingTop: 12 }}
      >
        <View>{playlistTiles}</View>
      </Scroll>
    </>
  );
};
