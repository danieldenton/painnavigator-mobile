import React from "react";
import { Video } from 'expo-av';
import styled from "styled-components/native";

const VideoWrapper = styled.View`
    flex: .75;
    flex-direction: row;
`;

const VideoWide = styled(Video)`
    width: 100%;
`;

export const VideoPlayer = ({ source }) => {
    return (
        <VideoWrapper>
            <VideoWide
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

