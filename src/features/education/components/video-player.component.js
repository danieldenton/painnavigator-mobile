import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Pause, Play } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";
import { movementVideos } from "../../movement/data/movement-videos-data.json";

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
    const { currentVideo, markVideoComplete } = useContext(MovementContext);
    const { id } = movementVideos.find(video => video.id === currentVideo);
    const video = useRef(null);
    const [status, setStatus] = useState({});

    useEffect(() => {
        video.current.setStatusAsync({ positionMillis: 0 });
    }, [currentVideo]);

    useEffect(() => {
        if(!status.didJustFinish) {
            return;
        };

        markVideoComplete(id);
        video.current.setStatusAsync({ positionMillis: 0 });

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

