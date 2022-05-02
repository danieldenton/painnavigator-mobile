import React, { useContext } from "react";
import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "../components/completion-screen.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const MovementUnitScreen = ({ navigation }) => {
    const { 
        currentMovementModule,
        videosCompleted,
        markVideoComplete,
        videosRemaining,
        setVideosRemaining,
        currentVideo,
        setCurrentVideo,
        moduleComplete,
        setModuleComplete
        } = useContext(MovementContext);

    const { videos, name } = currentMovementModule;

    return(
        <SafeView>
            <NavigationBarLeft screen={"Movement"} navigation={navigation} destination={"MovementPlaylist"} />
            { !moduleComplete ? (
                <MovementUnit 
                    moduleName={name}
                    videos={videos}
                    videosCompleted={videosCompleted}
                    videosRemaining={videosRemaining}
                    setVideosRemaining={setVideosRemaining}
                    currentVideo={currentVideo}
                    setCurrentVideo={setCurrentVideo}
                    markVideoComplete={markVideoComplete}

                />
                ) : (
                <CompletionScreen 
                    navigation={navigation}
                    setModuleComplete={setModuleComplete}
                /> 
            )}
        </SafeView>
    );
};