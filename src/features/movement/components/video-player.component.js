import React, { useContext, useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Pause, Play } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";

const VideoWrapper = styled.View`
    flex-direction: row;
    height: 211px;
    margin-left: -16px;
    margin-right: -16px;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source }) => {
    const { completeVideo, currentModule, switchVideo } = useContext(MovementContext);
    const movementVideo = useRef(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        movementVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [switchVideo]);

    useEffect(() => {
        if(!status.didJustFinish) {
            return;
        };

        completeVideo();

        const numVideosCompleted = currentModule.videos.filter(video => video.completed).length;
        const numVideosInPlaylist = currentModule.videos.length; 

        // HELP: Getting "Can't perform a React state update on an unmounted component" error
        // assume it's because I am calling this setStatusAsync function to reset the video position to 0 after 
        // the video changes. This conditional should prevent it from being called on the last video. 
        if(numVideosCompleted !== numVideosInPlaylist) {
            movementVideo.current.setStatusAsync({ positionMillis: 0 });
        };

    }, [status.didJustFinish]);

    return (
        <>
            <VideoWrapper>
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
        </>
    );
};