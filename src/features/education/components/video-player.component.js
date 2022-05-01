import React from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";

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
    return (
        <VideoWrapper>
            <VideoScreen
                source={{
                    uri: source,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay={true}
            />
        </VideoWrapper>
    )
}

