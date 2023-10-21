import React, { useContext, useEffect, useRef, useState } from "react";
import { MovementContext } from "../../../services/movement/movement.context";
import { VideoInfo } from "./video-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { NextUp } from "../../education/components/education-unit.styles";
import { Scroll } from "../../../components/scroll.component";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { SkipButton } from "./skip-button.component";
import { View } from "react-native";
import { track } from "@amplitude/analytics-react-native";
import { MOVEMENT_UNIT_EVENTS } from "../../../amplitude-events";

export const MovementUnit = () => {
  const {
    completeVideo,
    completedVideos,
    currentModule,
    currentVideo,
    switchVideo,
    skipVideo,
  } = useContext(MovementContext);
  const { source } = currentVideo;
  const [status, setStatus] = useState({});
  const [fullscreenStatus, setFullscreenStatus] = useState();
  const movementVideo = useRef(null);
  const incompleteVideos = currentModule.videos.filter(
    (video) => !video.completed
  );
  const upNextList = incompleteVideos.filter(
    (video) => video.id !== currentVideo.id
  );
  const trackEvent = MOVEMENT_UNIT_EVENTS.SWITCH_MOVEMENT_VIDEO_IN_LIST;

  const playlistTiles = upNextList.map((video, index) => (
    <PlaylistTile
      key={video.id}
      upNext={index === 0 && true}
      firstVideo={index === 0 && true}
      switchVideo={switchVideo}
      videoId={video.id}
      trackEvent={trackEvent}
    />
  ));

  function resetVideo() {
    const allVideosCompleted =
      completedVideos === currentModule.videos.length - 1;
    if (!allVideosCompleted) {
      track(MOVEMENT_UNIT_EVENTS.PLAY_NEXT_MOVEMENT_VIDEO);
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
      movementVideo.current.dismissFullscreenPlayer();
      setTimeout(() => {
        completeVideo();
      }, 1000);
    } else {
      completeVideo();
      resetVideo();
    }
  }, [status.didJustFinish]);

  const handlePress = () => {
    skipVideo();
    track(MOVEMENT_UNIT_EVENTS.SKIP_MOVEMENT_UNIT);
  };

  return (
    <>
      <VideoPlayer
        ref={movementVideo}
        source={source}
        status={status}
        setStatus={setStatus}
        setFullscreenStatus={setFullscreenStatus}
      />
      <SkipButton handlePress={handlePress} resetVideo={resetVideo} />
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
