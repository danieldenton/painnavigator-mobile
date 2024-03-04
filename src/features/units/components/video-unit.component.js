import React, { useEffect, useState, useRef } from "react";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { EducationUnitInfo } from "../../education/components/education-unit-info.component";
import { useKeepAwake } from 'expo-keep-awake';

export const VideoUnit = ({ unit }) => {
    const { source, id, name, summary, type } = unit;
    const [status, setStatus] = useState({});
    const replayUnit = useRef(null);

    useEffect(() => {
        replayUnit.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    type === "audio" && useKeepAwake();

    return (
        <>
            <VideoPlayer 
                ref={replayUnit}
                source={source}
                status={status}
                setStatus={setStatus}
                type={type}
            /> 
            <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
        </>
    );
};