import React, { forwardRef, useEffect } from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";
import { VideoControlBar } from "./controls.component";
import { Video } from "expo-av";

const VideoWrapper = styled.Pressable`
  flex-direction: row;
  margin-left: -16px;
  margin-right: -16px;
`;

const VideoScreen = styled(Video)`
  width: 100%;
`;

export const VideoPlayer = forwardRef((props, ref) => {
  const { source, status, setStatus, type, setFullscreenStatus } = props;
  const window = useWindowDimensions();
  const height = type === "audio" ? 0 : (window.width / 1280) * 720;

  function fullScreenStatus(status) {
    if (setFullscreenStatus) {
      setFullscreenStatus(() => status.fullscreenUpdate);
    }
  }

  return (
    <>
      <VideoWrapper
        style={{ height: height }}
        onPress={() =>
          status.isPlaying ? ref.current.pauseAsync() : ref.current.playAsync()
        }
      >
        <VideoScreen
          source={{ uri: source }}
          useNativeControls={false}
          ref={ref}
          resizeMode="contain"
          isLooping={false}
          shouldPlay={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onFullscreenUpdate={(status) => fullScreenStatus(status)}
        />
      </VideoWrapper>
      <VideoControlBar status={status} ref={ref} type={type} />
    </>
  );
});
