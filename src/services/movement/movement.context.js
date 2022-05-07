import React, { createContext, useEffect, useState } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
    const [movementProgress, setMovementProgress] = useState(0);
    const [moduleComplete, setModuleComplete] = useState(false);
    const [currentModule, setCurrentModule] = useState(movementModules[movementProgress]);
    const completeVideos = currentModule.videos.filter(video => video.completed);
    const incompleteVideos = currentModule.videos.filter(video => !video.completed);
    const [currentVideo, setCurrentVideo] = useState(movementVideos.find(video => video.id === incompleteVideos[0].id));

    useEffect(() => {
        setCurrentModule(movementModules[movementProgress]);
    }, [movementProgress]);

    useEffect(() => {
        const currentVideoData = movementVideos.find(video => video.id === incompleteVideos[0].id);
        setCurrentVideo(currentVideoData);
    }, [currentModule]);
    
    const completeVideo = () => {

        const allVideosCompleted = Object.values(currentModule.videos).every(
            value => value.completed === true
        );

        if(allVideosCompleted){
            setModuleComplete(true);
            setMovementProgress((prevMovementProgress) => { return ( prevMovementProgress + 1 ) });
            return;
        };

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

    const resetModuleScreen = () => {
        setTimeout(() => { setModuleComplete(false) }, 1000);
    }

    const switchVideo = (videoId) => {
        const newVideoData = movementVideos.find(video => video.id === videoId);
        setCurrentVideo(newVideoData);
    };

    return (
        <MovementContext.Provider
            value={{
                completeVideo,
                completeVideos,
                currentModule,
                currentVideo,
                incompleteVideos,
                moduleComplete,
                resetModuleScreen,
                switchVideo
            }}
        >
            {children}
        </MovementContext.Provider>
    );
};
