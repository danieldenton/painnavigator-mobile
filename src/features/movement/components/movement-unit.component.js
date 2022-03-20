import React from "react";
import { ScrollView } from "react-native";

import { movementVideos } from "../data/movement-videos-data.json";

import { SafeArea } from "../../../components/safe-area.component";
import { VideoPlayer } from "../../education/components/video-player.component";
import { ModuleInfo } from "./module-info.component";
import { PlaylistTile } from "./playlist-tile.component";
import { Button } from "../../../components/button.component";

export const MovementUnit = ({
    moduleName, 
    videosRemaining,
    currentVideo,
    setCurrentVideo,
    markVideoComplete,
    }) => {
    const {id, source, name, length, videoInfo} = movementVideos.find(video => video.id === currentVideo);

    const playlistTiles = videosRemaining
        .filter((video) => video !== currentVideo)
        .map((video) => (
            <PlaylistTile 
                videoId={video}
                setCurrentVideo={setCurrentVideo}
                key={video}
            />
        ));

    return(
        <SafeArea>
            <VideoPlayer 
                source={source}
            />
            <ModuleInfo 
                videoName={name}
                videoLength={length}
                videoInfo={videoInfo}
                moduleName={moduleName}
            />
            <ScrollView>
                {playlistTiles}
            </ScrollView>
            <Button
                onPress={() => {markVideoComplete(id);}}
            >
                Mark {name} Complete
            </Button>
        </SafeArea>
    );
};
