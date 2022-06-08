import React, { createContext, useEffect, useState } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
    const [movementProgress, setMovementProgress] = useState(13);
    const [moduleComplete, setModuleComplete] = useState(false);
    const [currentModule, setCurrentModule] = useState(movementModules.find(module => module.id === movementProgress));
    const [currentVideo, setCurrentVideo] = useState();
    const [nextModule, setNextModule] = useState(movementModules[movementProgress + 1]);
    const [completedMovementModules, setCompletedMovementModules] = useState([]);
    const [skippedMovementModules, setSkippedMovementModules] = useState([63]);

    useEffect(() => {
        const module = movementModules.find(module => module.id === movementProgress);
        setCurrentModule(module);
    }, [movementProgress]);

    useEffect(() => {
        const allVideosCompleted = Object.values(currentModule.videos).every(
            value => value.completed === true
        );

        if(allVideosCompleted) {
            setModuleComplete(true);
            advanceProgress();
            return;
        };

        const nextVideoId = currentModule.videos.filter(video => !video.completed)[0].id;
        const nextVideoData = movementVideos.find(video => video.id === nextVideoId);
        setCurrentVideo(nextVideoData);
    }, [currentModule]);

    const advanceProgress = () => {
        setMovementProgress((prevProgress) => { return ( prevProgress + 1 ) });
    };
    
    const completeVideo = () => {
        setCompletedMovementModules(prevCompleted => [...prevCompleted, currentVideo.id]);
        const newVideos = currentModule.videos.map(video => 
            video.id === currentVideo.id ? {
                ...video, 
                completed: true
            }
            :
            video
        );
        setCurrentModule({...currentModule, videos: newVideos})
    };

    const completeSkippedUnit = (unitId) => {
        const newCompletedModules = [...completedMovementModules, unitId];
        const sortedData = newCompletedModules.sort(function(a, b){return a-b});
        setCompletedMovementModules(sortedData);
        setSkippedMovementModules(prevSkipped => prevSkipped.filter(unit => unit !== unitId));
    };

    const resetModule = () => {
        setTimeout(() => { setModuleComplete(false) }, 1000);
    };

    const skipVideo = () => {
        setSkippedMovementModules(prevSkipped => [...prevSkipped, currentVideo.id]);
        setTimeout(() => { advanceProgress() }, 1000);
    };

    const switchVideo = (videoId) => {
        const newVideoData = movementVideos.find(video => video.id === videoId);
        setCurrentVideo(newVideoData);
    };

    return (
        <MovementContext.Provider
            value={{
                completeVideo,
                completedMovementModules,
                completeSkippedUnit,
                currentModule,
                currentVideo,
                moduleComplete,
                movementProgress,
                nextModule,
                resetModule,
                skippedMovementModules,
                skipVideo,
                switchVideo
            }}
        >
            {children}
        </MovementContext.Provider>
    );
};