import React, { useContext } from "react";
import { CompletedPlaylistTile, PlaylistTile } from "./playlist-tile.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { Scroll } from "../../../components/scroll.component";

export const MovementPlaylist = ({ navigation }) => {
    const { currentModule, switchVideo } = useContext(MovementContext);

    const playlistTiles = currentModule.videos.map((video, index) => (
        video.completed ? (
            <CompletedPlaylistTile
                key={video.id}
                firstInPlaylist={index === 0 && true}
                upLast={index === currentModule.videos.length - 1 ? true : false}
                videoId={video.id}
            />
        ) : (
            <PlaylistTile 
                key={video.id}
                upLast={index === currentModule.videos.length - 1 ? true : false}
                upNext={index === 0 && true}
                firstInPlaylist={index === 0 && true}
                navigation={navigation}
                switchVideo={switchVideo}
                videoId={video.id}
            />
        )
    ));

    return (
        <Scroll style={{ marginTop: 16 }}>
            {playlistTiles}
        </Scroll>
    );
};