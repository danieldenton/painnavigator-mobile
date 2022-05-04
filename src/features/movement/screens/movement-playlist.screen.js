import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { MovementPlaylistHeader } from "../components/movement-playlist-header.component";
import { MovementPlaylist } from "../components/movement-playlist.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection } from "../../../components/journals/journal.styles";

export const MovementPlaylistScreen = ({ navigation }) => {
    const { currentMovementModule, setCurrentVideo, videoTransform, videosCompleted } = useContext(MovementContext);
    const { id, length, name, videos } = currentMovementModule;
    
    return (
        <SafeView>
            <NavigationBarLeft screen={"Movement"} navigation={navigation} destination={"Today"} />
            <MovementPlaylistHeader 
                id={id}
                length={length}
                name={name}
                videos={videos}
            />
            <MovementPlaylist
                navigation={navigation}
                videos={videos}
                videoTransform={videoTransform}
                setCurrentVideo={setCurrentVideo}
            />
            <ButtonSection>
                <ModuleButton 
                    onPress={() => navigation.navigate("MovementUnit", { navigation })}
                    title={videosCompleted.length > 0 ? "Play Next" : "Play All"} 
                />
            </ButtonSection>
        </SafeView> 
    );
};