import React from "react";
import styled from "styled-components/native";
import { movementVideos } from "../data/movement-videos-data.json";
import { Card } from "react-native-paper";
import { Selected } from "../../../icons";
import { TouchableOpacity } from "react-native";
import { DottedLineSegement } from "../../../components/dotted-line-segment.component";
import { track } from "@amplitude/analytics-react-native";

const PlaylistTileCard = styled(Card)`
    border-radius: 15px;
    height: 112px;
    flex-direction: row;
    align-items: center;
`;

const PlaylistTileCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
    margin-left: 18.5px;
`;

const CardTextSection = styled.View`
    margin-left: 16px;
    justify-content: center;
    flex: .95;
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

const ThumbnailWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: 61.25px;
    width: 92px;
`;

const Thumbnail = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 2px;
`;

const IncompleteDot = styled.View`
    border-radius: 100px;
    border: 2px #CBD7EB solid;
    background-color: #F6F8FB;
    height: 18px;
    width: 18px;
    margin-right: 12px;
`;

const IncompleteBridge = styled.View`
    position: absolute;
    top: -123px;
    left: 0px;
    width: 2px;
    height: 90px;
`;

const CompleteDot = styled.View`
    border-radius: 100px;
    border: 2px #16A28B solid;
    background-color: #16A28B;
    height: 18px;
    width: 18px;
    margin-right: 12px;
`;

const CompleteBridge = styled.View`
    position: absolute;
    top: -126px;
    left: 8px;
    width: 2px;
    height: 126px;
    border: #16A28B solid;
`;

const PlaylistTileWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
`;

const ProgressTrackWrapper = styled.View`
`;

export const PlaylistTile = ({ videoId, upNext, firstVideo, navigation, switchVideo, trackEvent }) => {
    const { name, length, thumbnail } = movementVideos.find(video => video.id === videoId);

    const dots = [...Array(10)].map((element, index) => {
        return (
            <DottedLineSegement key={index} />
        );
    });
    
    const handleTrackEvent = () => {
        if (trackEvent) {
          track(trackEvent);
        }
      };

    return(
        <PlaylistTileWrapper>
            <ProgressTrackWrapper>
                {!upNext && <IncompleteBridge>{dots}</IncompleteBridge>}
                {upNext ? <CompleteDot /> : <IncompleteDot />}
                {upNext && !firstVideo && <CompleteBridge />}
            </ProgressTrackWrapper>
            <TouchableOpacity
                onPress={() => {
                    handleTrackEvent();
                    switchVideo(videoId); 
                    navigation && navigation.navigate("MovementUnit")
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
                            <CardHeader adjustsFontSizeToFit={true}>{name}</CardHeader>
                            <CardSubHeader>{Math.ceil(length / 60)} MIN</CardSubHeader>
                        </CardTextSection>
                    </PlaylistTileCardContent>
                </PlaylistTileCard>
            </TouchableOpacity>
        </PlaylistTileWrapper>
    );
};

const CompletedModuleCard = styled(Card)`
    border-radius: 15px;
    height: 112px;
    flex-direction: row;
    align-items: center;
    background-color: #CDEBE6;
`;

const CompletedModuleCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
    margin-left: 18.5px;
    margin-right: 18.5px;
`;

const TextSection = styled.View`
    flex: .8;
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

export const CompletedPlaylistTile = ({ videoId, firstVideo }) => {
    const { name, length } = movementVideos.find(video => video.id === videoId);

    return (
        <PlaylistTileWrapper>
            <ProgressTrackWrapper>
                <CompleteDot />
                {!firstVideo && <CompleteBridge />}
            </ProgressTrackWrapper>
            <CompletedModuleCard style={{ backgroundColor: "#CDEBE6", flex: 1 }}>
                <CompletedModuleCardContent>
                    <TextSection>
                        <Header>{name}</Header>
                        <CardSubHeader>{Math.ceil(length / 60)} MIN</CardSubHeader>
                    </TextSection>
                    <IconSection>
                        <Selected />
                    </IconSection>
                </CompletedModuleCardContent>
            </CompletedModuleCard>
        </PlaylistTileWrapper>
    ); 
};