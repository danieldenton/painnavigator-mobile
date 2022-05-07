import React, { useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Pause, Play } from "../../../icons";

const VideoWrapper = styled.View`
    flex-direction: row;
    height: 211px;
    margin-left: -16px;
    margin-right: -16px;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source, completeVideo, currentVideo }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        video.current.setStatusAsync({ positionMillis: 0 });
    }, [currentVideo]);

    useEffect(() => {
        if(!status.didJustFinish) {
            return;
        };

        video.current.setStatusAsync({ positionMillis: 0 });
        completeVideo();

    }, [status.didJustFinish]);

    return (
        <>
            <VideoWrapper>
                <VideoScreen
                    source={{ uri: source}}
                    useNativeControls={true}
                    ref={video}
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </VideoWrapper>
            <Pressable onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} style={{ marginTop: 16 }}>
                {status.isPlaying ? <Pause /> : <Play />}
            </Pressable>
        </>
    )
}