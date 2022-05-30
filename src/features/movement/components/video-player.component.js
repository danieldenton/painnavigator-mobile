import React, { useContext, useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable, useWindowDimensions } from "react-native";
import { Pause, Play } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";

const VideoWrapper = styled.View`
    flex-direction: row;
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
    const window = useWindowDimensions();
    const height = window.width / 1280 * 720;

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
        
        if(numVideosCompleted !== numVideosInPlaylist) {
            movementVideo.current.setStatusAsync({ positionMillis: 0 });
        };

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
        </>
    );
};