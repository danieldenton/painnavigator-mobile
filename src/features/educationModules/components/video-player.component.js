import React from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";

const VideoWrapper = styled.View`
    flex-direction: row;
    height: 32.6%;
`;

const VideoScreen = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source }) => {
    return (
        <VideoWrapper>
            <VideoScreen
                source={{
                    uri: source,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
            />
        </VideoWrapper>
    )
}

