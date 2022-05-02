import React from "react";
import styled from "styled-components/native";
import { movementVideos } from "../data/movement-videos-data.json";
import { Card } from "react-native-paper";
import { Selected } from "../../../icons";
import { TouchableOpacity } from "react-native";

const PlaylistTileCard = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 21px;
    padding-right: 22px;
    height: 92px;
`;

const PlaylistTileCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
    margin-left: 16px;
    justify-content: center;
`;

const CardHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

const CardSubHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 12px;
    margin-top: 8px;
`;

const CardIconSection = styled.View`
    flex: .2;
    align-items: flex-end;
    justify-content: center;
`;

const ThumbnailWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 95px;
`;

const Thumbnail = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

export const PlaylistTile = ({ videoId, navigation, completed, setCurrentVideo }) => {
    const videoIndex = videoId - 1;
    const { name, length } = movementVideos[videoIndex];

    return(
        <TouchableOpacity
            onPress={() => {
                !completed && setCurrentVideo(videoId); 
                navigation && navigation.navigate("MovementUnit", { navigation})
                }
            }
        >
            <PlaylistTileCard style={{ backgroundColor: completed ? "#CDEBE6" : "white" }}>
                <PlaylistTileCardContent>
                    {!completed && 
                        <ThumbnailWrapper>
                            <Thumbnail source={require("../assets/exercise_1.png")}/>
                        </ThumbnailWrapper>
                    }
                    <CardTextSection>
                        <CardHeader>{name}</CardHeader>
                        <CardSubHeader>{length} MIN</CardSubHeader>
                    </CardTextSection>
                    {completed  && 
                        <CardIconSection>
                            <Selected />
                        </CardIconSection>
                    }
                </PlaylistTileCardContent>
            </PlaylistTileCard>
        </TouchableOpacity>
    );
};