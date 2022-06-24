import React, { useEffect, useState, useRef } from "react";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { EducationUnitInfo } from "../../education/components/education-unit-info.component";
2
export const VideoUnit = ({ unit }) => {
    const { source, id, name, summary, type } = unit;
    const [status, setStatus] = useState({});
    const replayUnit = useRef(null);

    useEffect(() => {
        replayUnit.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    return (
        <>
            <VideoPlayer 
                ref={replayUnit}
                source={source}
                status={status}
                setStatus={setStatus}
            /> 
            <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
        </>
    );
};