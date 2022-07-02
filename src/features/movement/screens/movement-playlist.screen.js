import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { MovementPlaylistHeader } from "../components/movement-playlist-header.component";
import { MovementPlaylist } from "../components/movement-playlist.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

const ModuleButtonSection = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: 16px;
    background-color: ${colors.bg.secondary};
`;

export const MovementPlaylistScreen = ({ navigation, route }) => {
    const { currentModule } = useContext(MovementContext);
    const { videos } = currentModule;
    const numVideosCompleted = videos.filter(video => video.completed).length;
    
    return (
        <SafeView>
            <NavigationBarLeft screen={"Movement"} navigation={navigation} destination={"Today"} />
            <MovementPlaylistHeader />
            <MovementPlaylist navigation={navigation} />
            <ButtonSection>
                <ModuleButton 
                    onPress={() => navigation.navigate("MovementUnit", { navigation })}
                    title={numVideosCompleted > 0 ? "Play Next" : "Play All"} 
                />
            </ButtonSection>
        </SafeView> 
    );
};