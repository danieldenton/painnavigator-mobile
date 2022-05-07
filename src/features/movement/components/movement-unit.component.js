import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { VideoPlayer } from "./video-player.component";
import { VideoInfo } from "./video-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { NextUp } from "../../education/components/education-unit.styles";

export const MovementUnit = () => {
    const { completeVideo, currentModule, currentVideo, switchVideo } = useContext(MovementContext);
    const { source } = currentVideo;
    const incompleteVideos = currentModule.videos.filter(video => !video.completed);
    const upNextList = incompleteVideos.filter((video) => video.id !== currentVideo.id);
    const playlistTiles = upNextList.map((video, index) => (
        <PlaylistTile 
            key={video.id}
            upNext={index === 0 && true}
            firstVideo={index === 0 && true}
            switchVideo={switchVideo}
            videoId={video.id}
        />
    ));

    return(
        <>
            <VideoPlayer source={source} currentVideo={currentVideo} completeVideo={completeVideo} />
            <VideoInfo />
            {incompleteVideos.length > 1 && <NextUp />}
            <ScrollView showsVerticalScrollIndicator={false} >
                {playlistTiles}
            </ScrollView>
        </>
    );
};
