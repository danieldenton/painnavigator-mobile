import React from "react";
import { VideoPlayer } from "../components/video-player.component";
import { EducationUnitInfo } from "../../education/components/education-unit-info.component";

export const VideoUnit = ({ unit }) => {
    const { source, id, name, summary, type } = unit;

    return (
        <>
            <VideoPlayer source={source} />
            <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
        </>
    );
};