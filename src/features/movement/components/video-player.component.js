import React, { useContext, useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable, useWindowDimensions } from "react-native";
import { Pause, Play } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";
import { SkipButton } from "./skip-button.component";

const VideoWrapper = styled.View`
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source }) => {
    const { allVideosCompleted, completeVideo, skipVideo, switchVideo } = useContext(MovementContext);
    const movementVideo = useRef(null);
    const [status, setStatus] = useState({});
    const window = useWindowDimensions();
    const height = window.width / 1280 * 720;

    function resetVideo() {
        if(!allVideosCompleted) {
            movementVideo.current.setStatusAsync({ positionMillis: 0 });
        };
    };

    useEffect(() => {
        movementVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [switchVideo]);

    useEffect(() => {
        if(!status.didJustFinish) {
            return;
        };

        completeVideo();        
        resetVideo();

    }, [status.didJustFinish]);

    return (
        <>
            <VideoWrapper style={{ height: height}}>
                <VideoScreen
                    source={{ uri: source}}
                    useNativeControls={true}
                    ref={movementVideo}
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </VideoWrapper>
            <Pressable onPress={() => status.isPlaying ? movementVideo.current.pauseAsync() : movementVideo.current.playAsync()} style={{ marginTop: 16 }}>
                {status.isPlaying ? <Pause /> : <Play />}
            </Pressable>
            <SkipButton handlePress={skipVideo} resetVideo={resetVideo} />
        </>
    );
};