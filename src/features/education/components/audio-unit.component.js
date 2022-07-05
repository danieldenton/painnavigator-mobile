import React, { useEffect, useState, useRef } from "react";
import { VideoPlayer } from "../../../components/video-player/video-player.component";
import { useKeepAwake } from 'expo-keep-awake';
import { Header, TitleSection, ModuleTypeTitle, UnitTitle, Summary } from "../../education/components/education-unit.styles";

export const AudioUnit = ({ unit }) => {
    const { source, name, summary, type } = unit;
    const [status, setStatus] = useState({});
    const replayUnit = useRef(null);

    useEffect(() => {
        replayUnit.current.setStatusAsync({ positionMillis: 0 });
    }, [status.didJustFinish]);

    useKeepAwake();

    return (
        <>
            <ModuleTypeTitle>EDUCATION{type === "audio" && ": AUDIO MODULE"}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>
                        {name}
                    </UnitTitle>
                </TitleSection>
            </Header>
            <Summary>
                {summary} 
            </Summary>
            <VideoPlayer 
                ref={replayUnit}
                source={source}
                status={status}
                setStatus={setStatus}
                type={type}
            /> 
        </>
    );
};