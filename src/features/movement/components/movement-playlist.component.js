import React, { useContext } from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const MovementPlaylist = ({ navigation }) => {
    const { completedVideos, currentModule, switchVideo } = useContext(MovementContext);
    const incompleteVideos = currentModule.videos.filter(video => !completedVideos.includes(video.id));


    const playlistTiles = currentModule.videos.map((video, index) => (
        completedVideos.includes(video.id) ? (
            <CompletedPlaylistTile
                key={video.id}
                firstVideo={index === 0 && true}
                upLast={index === currentModule.videos.length - 1 ? true : false}
                videoId={video.id}
            />
        ) : (
            <PlaylistTile 
                key={video.id}
                lastVideo={index === currentModule.videos.length - 1 ? true : false}
                upNext={video.id === incompleteVideos[0].id && true}
                firstVideo={index === 0 && true}
                navigation={navigation}
                switchVideo={switchVideo}
                videoId={video.id}
            />
        )
    ));

    return (
        <Scroll style={{ marginTop: 16, paddingRight: 16, paddingLeft: 16 }}>
            <View style={{ marginTop: 1, marginBottom: 80 }}>
                {playlistTiles}
            </View>
        </Scroll>
    );
};