import React, { useContext } from "react";

import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "../components/completion-screen.component";

import { MovementContext } from "../../../services/movement/movement.context";

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
        <>
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
        </>
    );
};