import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { MovementPlaylistHeader } from "../components/movement-playlist-header.component";
import { PlayAllButton } from "../components/play-all-button.component";
import { MovementPlaylist } from "../components/movement-playlist.component";

import { MovementContext } from "../../../services/movement/movement.context";

export const MovementPlaylistScreen = ({ navigation }) => {
    const { currentMovementModule, setCurrentVideo, videoTransform } = useContext(MovementContext);
    const { id, length, name, videos } = currentMovementModule;
    
    return (
        <SafeArea>
            <MovementPlaylistHeader 
                id={id}
                length={length}
                name={name}
                videos={videos}
            />
            <PlayAllButton
                navigation={navigation}
            />
            <MovementPlaylist
                navigation={navigation}
                videos={videos}
                videoTransform={videoTransform}
                setCurrentVideo={setCurrentVideo}
            />
        </SafeArea> 
    );
};