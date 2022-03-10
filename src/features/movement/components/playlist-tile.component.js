import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { movementVideos } from "../data/movement-videos-data.json";

const PlaylistTileWrapper = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    margin: ${(props) => props.theme.space[3]};
`;

const ThumbnailWrapper = styled.View`
    flex: .45;
    align-items: center;
    justify-content: center;
`;

const Thumbnail = styled.Image`
`;

const VideoInfoBox = styled.View`
    flex: 1;
`;

const IconBox = styled.View`
    justify-content: center;
    align-items: flex-end;
`;

export const PlaylistTile = ({ videoId, navigation, completed, setCurrentVideo }) => {
    const videoIndex = videoId - 1;
    const {name, sets, reps, length} = movementVideos[videoIndex];

    return(
        <PlaylistTileWrapper 
            onPress={() => {
                !completed && setCurrentVideo(videoId); 
                navigation && navigation.navigate("MovementUnit", { navigation})
                }
            }
        >
            <ThumbnailWrapper>
                {completed ? <Feather name="check-circle" size={36} color="black" /> : <Thumbnail />}
            </ThumbnailWrapper>
            <VideoInfoBox>
                <Text>{name}</Text>
                <Text>{sets} sets - {reps} reps</Text>
                <Text>{length} min</Text>
            </VideoInfoBox>
            <IconBox>
                <MaterialIcons name="navigate-next" size={24} color="black" />
            </IconBox>
        </PlaylistTileWrapper>
    );
};