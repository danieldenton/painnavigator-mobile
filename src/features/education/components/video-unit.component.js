import React, { useContext, useEffect, useState, useRef } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { useKeepAwake } from 'expo-keep-awake';
import { VideoPlayer } from "../../../components/video-player/video-player.component";

export const VideoUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { source, id, name, type, summary } = currentModule;
    const [status, setStatus] = useState({});
    const educationVideo = useRef(null);

    useEffect(() => {
        educationVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    type === "audio" && useKeepAwake();
    
    return (
        <>  
            <VideoPlayer
                ref={educationVideo}
                source={source}
                status={status}
                setStatus={setStatus}
                type={type}
            />
            <EducationUnitInfo id={id} name={name} type={type} summary={summary} testID={"video-player"}/>
        </>
    )
};