import React from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";
import { Scroll } from "../../../components/scroll.component";

export const MovementPlaylist = ({ navigation, setCurrentVideo, videoTransform }) => {

    const playlistTiles = videoTransform.map((video, index) => (
        video.completed ? 
        <CompletedPlaylistTile
            key={video.video}
            firstInPlaylist={index === 0 && true}
            upLast={index === videoTransform.length - 1 ? true : false}
            videoId={video.video}
        />
        :
        <PlaylistTile 
            key={video.video}
            upLast={index === videoTransform.length - 1 ? true : false}
            upNext={index === 0 && true}
            firstInPlaylist={index === 0 && true}
            navigation={navigation}
            setCurrentVideo={setCurrentVideo}
            videoId={video.video}
        />
    ));

    return (
        <Scroll style={{ marginTop: 16 }}>
            {playlistTiles}
        </Scroll>
    );
};