import React from "react";
import { ScrollView } from "react-native";

import { PlaylistTile } from "./playlist-tile.component";

export const MovementPlaylist = ({ navigation, setCurrentVideo, videoTransform }) => {

    const playlistTiles = videoTransform.map((video) => (
        <PlaylistTile 
            key={video.video}
            videoId={video.video}
            completed={video.completed}
            setCurrentVideo={setCurrentVideo}
            navigation={navigation}
        />
    ));

    return (
        <ScrollView>
            {playlistTiles}
        </ScrollView>
    );
};