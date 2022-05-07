import React from "react";
import styled from "styled-components/native";
import { movementVideos } from "../data/movement-videos-data.json";
import { Card } from "react-native-paper";
import { Selected } from "../../../icons";
import { TouchableOpacity } from "react-native";

const PlaylistTileCard = styled(Card)`
    margin-bottom: ${(props) => props.theme.space[3]};
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

const IncompleteDot = styled.View`
    border-radius: 100px;
    border: 2px #CBD7EB solid;
    background-color: #F6F8FB;
    height: 18px;
    width: 18px;
    margin-right: 12px;
    margin-top: 12px;
`;

const IncompleteBridge = styled.View`
    position: absolute;
    top: -78px;
    left: 8px;
    width: 2px;
    height: 90px;
    border-radius: 5px;
    border: #CBD7EB dashed;
`;

const CompleteDot = styled.View`
    border-radius: 100px;
    border: 2px #16A28B solid;
    background-color: #16A28B;
    height: 18px;
    width: 18px;
    margin-right: 12px;
    margin-top: 12px;
`;

const CompleteBridge = styled.View`
    position: absolute;
    top: -78px;
    left: 8px;
    width: 2px;
    height: 90px;
    border: #16A28B solid;
`;

const PlaylistTileWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ProgressTrackWrapper = styled.View`
`;

export const PlaylistTile = ({ videoId, upLast, upNext, firstInPlaylist, navigation, setCurrentVideo }) => {
    const videoIndex = videoId - 1;
    const { name, length, thumbnail } = movementVideos[videoIndex];

    // source={require("../assets/exercise_1.png")}

    return(
        <PlaylistTileWrapper>
            <ProgressTrackWrapper>
                {upNext || firstInPlaylist ? <CompleteDot /> : <IncompleteDot />}
                {!upNext && <IncompleteBridge />}
            </ProgressTrackWrapper>
            <TouchableOpacity
                onPress={() => {
                    setCurrentVideo(videoId); 
                    navigation && navigation.navigate("MovementUnit", { navigation })
                    }
                }
                style={{ flex: 1 }}
            >
                <PlaylistTileCard>
                    <PlaylistTileCardContent>
                        <ThumbnailWrapper>
                            <Thumbnail source={{ uri: thumbnail }} />
                        </ThumbnailWrapper>
                        <CardTextSection>
                            <CardHeader>{name}</CardHeader>
                            <CardSubHeader>{length} MIN</CardSubHeader>
                        </CardTextSection>
                    </PlaylistTileCardContent>
                </PlaylistTileCard>
            </TouchableOpacity>
        </PlaylistTileWrapper>
    );
};

const CompletedModuleCard = styled(Card)`
    margin-bottom: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 21px;
    padding-right: 22px;
    background-color: #CDEBE6;
    max-height: 92px;
`;

const CompletedModuleCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const TextSection = styled.View`
    flex: .8;
    margin-left: 8px;
`;

const Header = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

const IconSection = styled.View`
    flex: .2;
    align-items: flex-end;
    justify-content: center;
`;

export const CompletedPlaylistTile = ({ videoId, firstInPlaylist }) => {
    const videoIndex = videoId - 1;
    const { name, length } = movementVideos[videoIndex];

    return (
        <PlaylistTileWrapper>
            <ProgressTrackWrapper>
                <CompleteDot />
                {!firstInPlaylist && <CompleteBridge />}
            </ProgressTrackWrapper>
            <CompletedModuleCard style={{ backgroundColor: "#CDEBE6", flex: 1 }}>
                <CompletedModuleCardContent>
                    <TextSection>
                        <Header>{name}</Header>
                        <CardSubHeader>{length} MIN</CardSubHeader>
                    </TextSection>
                    <IconSection>
                        <Selected />
                    </IconSection>
                </CompletedModuleCardContent>
            </CompletedModuleCard>
        </PlaylistTileWrapper>
    ); 
};