import React, { createContext, useContext, useEffect, useState } from "react";
import { movementModules } from "../../features/movement/data/movement-modules-data.json";
import { movementVideos } from "../../features/movement/data/movement-videos-data.json";
import { post } from "./movement.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MovementContext = createContext();

export const MovementContextProvider = ({ children }) => {
    const [movementProgress, setMovementProgress] = useState(1);
    const [moduleComplete, setModuleComplete] = useState(false);
    const [currentModule, setCurrentModule] = useState(movementModules.find(module => module.id === movementProgress));
    const [currentVideo, setCurrentVideo] = useState();
    const [completedVideos, setCompletedVideos] = useState(0);
    const [nextModule, setNextModule] = useState(movementModules[movementProgress + 1]);
    const [completedMovementModules, setCompletedMovementModules] = useState([]);
    const [skippedMovementModules, setSkippedMovementModules] = useState([]);
    const [lastMovement, setLastMovement] = useState(null);
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        const module = movementModules.find(module => module.id === movementProgress);
        setCurrentModule(module);
        setNextModule(movementModules[module.id + 1]);
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
        const STATUS_NOT_STARTED = 0;
        const module = {
            module_id: currentModule.id,
            status: STATUS_NOT_STARTED        
        };
        post(module, user.user.uid);
        setMovementProgress((prevProgress) => { return ( prevProgress + 1 ) });
    };
    
    const completeVideo = () => {
        setCompletedVideos(prevCompleted => prevCompleted + 1);
        if(!completedMovementModules.includes(currentVideo.id)){
            setCompletedMovementModules(prevCompleted => [...prevCompleted, currentVideo.id]);
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

    const completeSkippedUnit = (unitId) => {
        const newCompletedModules = [...completedMovementModules, unitId];
        const sortedData = newCompletedModules.sort(function(a, b){return a-b});
        setCompletedMovementModules(sortedData);
        setSkippedMovementModules(prevSkipped => prevSkipped.filter(unit => unit !== unitId));
    };

    function getPlaylistLength(videos) {
        const videoArray = videos.map((video) => {
            const the_video = movementVideos.find(item => item.id === video.id);
            const length = Math.ceil(the_video.length / 60);
        
            return(
                length
            );
        });

        const videoLength = videoArray.reduce((previousVideoRange, currentVideoRange) => previousVideoRange + currentVideoRange, 0);

        return videoLength;
    };

    const resetModule = () => {
        setTimeout(() => { setModuleComplete(false); setCompletedVideos(0) }, 1000);
    };

    const skipVideo = () => {
        setCompletedVideos(prevCompleted => prevCompleted + 1);
        if(!skippedMovementModules.includes(currentVideo.id)){
            setSkippedMovementModules(prevCompleted => [...prevCompleted, currentVideo.id]);
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

    const switchVideo = (videoId) => {
        const newVideoData = movementVideos.find(video => video.id === videoId);
        setCurrentVideo(newVideoData);
    };

    const saveMovementProgress = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@movement_progress", jsonValue);
          } catch (e) {
            console.log("error storing movement_progress", e);
          }
    };

    const loadMovementProgress = async () => {
        try {
            const value = await AsyncStorage.getItem("@movement_progress");
            if (value !== null) {
            setMovementProgress(JSON.parse(value));
            }
        } catch (e) {
            console.log("error loading movement_progress", e);
        }
    };

    useEffect(() => {
        loadMovementProgress();
    }, []);

    useEffect(() => {
        saveMovementProgress(movementProgress);
    }, [movementProgress]);

    return (
        <MovementContext.Provider
            value={{
                allVideosCompleted: completedVideos === currentModule.videos.length - 1,
                completeVideo,
                completedMovementModules,
                completeSkippedUnit,
                currentModule,
                currentVideo,
                getPlaylistLength,
                lastMovement,
                moduleComplete,
                movementProgress,
                nextModule,
                resetModule,
                setMovementProgress,
                setLastMovement,
                skippedMovementModules,
                skipVideo,
                switchVideo
            }}
        >
            {children}
        </MovementContext.Provider>
    );
};