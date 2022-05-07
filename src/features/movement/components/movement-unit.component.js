import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";
import { VideoPlayer } from "../../education/components/video-player.component";
import { VideoInfo } from "./video-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { NextUp } from "../../education/components/education-unit.styles";

export const MovementUnit = () => {
    const { currentVideo, incompleteVideos, switchVideo } = useContext(MovementContext);
    const { source } = currentVideo;

    const upNextList = incompleteVideos.filter((video) => video.id !== currentVideo.id);
    const playlistTiles = upNextList.map((video, index) => (
        <PlaylistTile 
            key={video.id}
            upLast={index === upNextList.length - 1 ? true : false}
            upNext={index === 0 && true}
            switchVideo={switchVideo}
            videoId={video.id}
        />
    ));

    return(
        <>
            <VideoPlayer source={source} />
            <VideoInfo />
            {incompleteVideos.length > 1 && <NextUp />}
            <ScrollView showsVerticalScrollIndicator={false} >
                {playlistTiles}
            </ScrollView>
        </>
    );
};
