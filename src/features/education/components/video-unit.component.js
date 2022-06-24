import React, { useContext, useEffect, useState, useRef } from "react";
import { EducationUnitInfo } from "./education-unit-info.component";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { EducationContext } from "../../../services/education/education.context";

export const VideoUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { source, id, name, type, summary } = currentModule;
    const [status, setStatus] = useState({});
    const educationVideo = useRef(null);

    useEffect(() => {
        educationVideo.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);
    
    return (
        <> 
            <VideoPlayer
                ref={educationVideo}
                source={source}
                status={status}
                setStatus={setStatus}
            />
            <EducationUnitInfo id={id} name={name} type={type} summary={summary} />
        </>
    )
};