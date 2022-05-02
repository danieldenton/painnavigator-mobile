import React from "react";
import { ScrollView } from "react-native";
import { movementVideos } from "../data/movement-videos-data.json";
import { VideoPlayer } from "../../education/components/video-player.component";
import { ModuleInfo } from "./module-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { NextUp } from "../../education/components/education-unit.styles";

export const MovementUnit = ({ moduleName, videosRemaining, currentVideo, setCurrentVideo, markVideoComplete }) => {
    const {id, source, name, length, videoInfo} = movementVideos.find(video => video.id === currentVideo);

    const playlistTiles = videosRemaining
        .filter((video) => video !== currentVideo)
        .map((video) => (
            <PlaylistTile 
                videoId={video}
                setCurrentVideo={setCurrentVideo}
                key={video}
            />
        ));

    return(
        <>
            <VideoPlayer 
                source={source}
            />
            <ModuleInfo 
                videoName={name}
                videoLength={length}
                videoInfo={videoInfo}
                moduleName={moduleName}
            />
            {videosRemaining.length > 1 && <NextUp />}
            <ScrollView style={{ marginBottom: 120 }} showsVerticalScrollIndicator={false} >
                {playlistTiles}
            </ScrollView>
            <ButtonSection>
                <ModuleButton
                    onPress={() => {markVideoComplete(id);}}
                    title={`Mark ${name} Complete`}
                />
            </ButtonSection>
        </>
    );
};
