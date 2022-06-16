import React, { useContext, useEffect, useRef, useState } from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Pressable, useWindowDimensions } from "react-native";
import { Pause, Play, FullScreenButton } from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";

const VideoWrapper = styled.View`
    flex-direction: row;
    margin-left: -16px;
    margin-right: -16px;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = () => {
    const educationVideo = useRef(null);
    const [status, setStatus] = useState({});
    const { currentModule } = useContext(EducationContext);
    const { source } = currentModule;
    const window = useWindowDimensions();
    const height = window.width / 1280 * 720;

    useEffect(() => {
        educationVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    return (
        <>
            <VideoWrapper style={{ height: height}}>
                <VideoScreen
                    source={{ uri: source}}
                    useNativeControls={true}
                    ref={educationVideo}
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </VideoWrapper>
            <Pressable onPress={() => status.isPlaying ? educationVideo.current.pauseAsync() : educationVideo.current.playAsync()} style={{ marginTop: 16 }}>
                {status.isPlaying ? <Pause /> : <Play />}
            </Pressable>
        </>
    );
};