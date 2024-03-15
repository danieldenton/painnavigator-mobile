import React, { useContext } from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const MovementPlaylist = ({ navigation }) => {
    const { currentModule, switchVideo } = useContext(MovementContext);
    const incompleteVideos = currentModule.videos.filter(video => !video.completed);

    const playlistTiles = currentModule.videos.map((video, index) => (
        video.completed ? (
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
                trackEvent={trackEvent}
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