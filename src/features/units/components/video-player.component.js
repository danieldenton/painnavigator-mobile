import React, { useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable, useWindowDimensions } from "react-native";
import { Pause, Play } from "../../../icons";

const VideoWrapper = styled.View`
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source }) => {
    const replayVideo = useRef(null);
    const [status, setStatus] = useState({});
    const window = useWindowDimensions();
    const height = window.width / 1280 * 720;

    useEffect(() => {
        replayVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    return (
        <>
            <VideoWrapper style={{ height: height}}>
                <VideoScreen
                    source={{ uri: source}}
                    useNativeControls={true}
                    ref={replayVideo}
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </VideoWrapper>
            <Pressable onPress={() => status.isPlaying ? replayVideo.current.pauseAsync() : replayVideo.current.playAsync()} style={{ marginTop: 16 }}>
                {status.isPlaying ? <Pause /> : <Play />}
            </Pressable>
        </>
    );
};