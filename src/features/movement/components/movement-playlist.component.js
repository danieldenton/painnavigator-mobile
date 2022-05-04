import React from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";

export const MovementPlaylist = ({ navigation, setCurrentVideo, videoTransform }) => {

    const playlistTiles = videoTransform.map((video) => (
        video.completed ? 
        <CompletedPlaylistTile
            key={video.video}
            videoId={video.video}
        />
        :
        <PlaylistTile 
            key={video.video}
            videoId={video.video}
            setCurrentVideo={setCurrentVideo}
            navigation={navigation}
        />
    ));

    return (
        <>
            {playlistTiles}
        </>
    );
};