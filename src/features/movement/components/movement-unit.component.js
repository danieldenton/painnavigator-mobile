import React from "react";
import { ScrollView } from "react-native";
import { movementVideos } from "../data/movement-videos-data.json";
import { VideoPlayer } from "../../education/components/video-player.component";
import { ModuleInfo } from "./module-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { NextUp } from "../../education/components/education-unit.styles";

export const MovementUnit = ({ videosRemaining, currentVideo, setCurrentVideo, markVideoComplete }) => {
    const {id, chapter, source, name } = movementVideos.find(video => video.id === currentVideo);

    const upNextList = videosRemaining.filter((video) => video !== currentVideo);
    const playlistTiles = upNextList.map((video, index) => (
        <PlaylistTile 
            key={video}
            upLast={index === upNextList.length - 1 ? true : false}
            upNext={index === 0 && true}
            setCurrentVideo={setCurrentVideo}
            videoId={video}
        />
    ));

    return(
        <>
            <VideoPlayer 
                source={source}
            />
            <ModuleInfo 
                chapter={chapter}
                videoName={name}
                videoId={id}
            />
            {videosRemaining.length > 1 && <NextUp />}
            <ScrollView showsVerticalScrollIndicator={false} >
                {playlistTiles}
            </ScrollView>
        </>
    );
};
