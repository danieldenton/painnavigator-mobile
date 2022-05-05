import React from "react";
import styled from "styled-components/native";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";

export const MovementPlaylist = ({ navigation, setCurrentVideo, videoTransform }) => {

    const playlistTiles = videoTransform.map((video) => (
        video.completed ? 
        <CompletedPlaylistTile
            key={video.video}
            videoId={video.video}
            lastInList={false}
        />
        :
        <PlaylistTile 
            key={video.video}
            videoId={video.video}
            setCurrentVideo={setCurrentVideo}
            navigation={navigation}
            lastInList={true}
        />
    ));

    const PlaylistWrapper = styled.View`
        flex: 1; 
        flex-direction: row;
    `;

    const ProgressTrack = styled.View`
        flex: .1;
        align-items: center;
        margin-top: 8px;
    `;

    const PlaylistTilesWrapper = styled.View`
    `;

    return (
        <>
            {playlistTiles}
        </>
    );
};