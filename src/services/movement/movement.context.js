import React, {useState, useEffect, createContext } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
    const [movementProgress, setMovementProgress] = useState(0);
    const currentMovementModule = movementModules[movementProgress];
    const { videos } = currentMovementModule;
    const [moduleComplete, setModuleComplete] = useState(false);
    const [videosCompleted, setVideosCompleted] = useState([]);
    const [videosRemaining, setVideosRemaining] = useState(videos);
    const [videoTransform, setVideoTransform] = useState({});
    const [currentVideo, setCurrentVideo] = useState(videosRemaining[0]);
    
    const markVideoComplete = (videoId) => {
        const numVideosCompleted = videosCompleted.length;
        if(numVideosCompleted === videos.length - 1){
            setModuleComplete(true);
            setMovementProgress((prevMovementProgress) => { return ( prevMovementProgress + 1 ) });
            setVideosCompleted([]);
            return;
        };
        setVideosCompleted(prevVideosCompleted => [...prevVideosCompleted, videoId]);
    };

    useEffect(() => {
        const newVideosRemaining = videos.filter(video => !videosCompleted.includes(video));
        setVideosRemaining(newVideosRemaining);
        setVideoTransform(videos.map((video) => {
            return {
                video,
                completed: videosCompleted.includes(video)
              };
        }));
    }, [videosCompleted])

    useEffect(() => {
        setCurrentVideo(videosRemaining[0]);
    }, [videosRemaining])

    const resetModuleScreen = () => {
        setTimeout(() => {setModuleComplete(false)}, 1000);
    }

    return (
        <MovementContext.Provider
            value={{
                currentMovementModule,
                videosCompleted,
                markVideoComplete,
                videosRemaining,
                setVideosRemaining,
                videoTransform,
                currentVideo,
                setCurrentVideo,
                moduleComplete,
                resetModuleScreen
            }}
        >
            {children}
        </MovementContext.Provider>
    );
};
