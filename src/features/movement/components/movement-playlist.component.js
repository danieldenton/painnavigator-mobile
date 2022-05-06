import React from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";

export const MovementPlaylist = ({ navigation, setCurrentVideo, videoTransform }) => {

    const playlistTiles = videoTransform.map((video, index) => (
        video.completed ? 
        <CompletedPlaylistTile
            key={video.video}
            lastInList={index === videoTransform.length - 1 ? true : false}
            videoId={video.video}
        />
        :
        <PlaylistTile 
            key={video.video}
            lastInList={index === videoTransform.length - 1 ? true : false}
            navigation={navigation}
            setCurrentVideo={setCurrentVideo}
            videoId={video.video}
        />
    ));

    return (
        <>
            {playlistTiles}
        </>
    );
};