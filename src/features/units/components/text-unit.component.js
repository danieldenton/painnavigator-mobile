import React from "react";
import { EducationUnitInfo } from "../../education/components/education-unit-info.component";
import { Scroll } from "../../../components/scroll.component";
import { BulletList } from "../../../components/bullet-list.component";
import styled from "styled-components/native";

const GraphicWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
`;

const Graphic = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    resize-mode: contain;
    overflow: hidden;
`;

export const TextUnit = ({ unit }) => {
    const { id, name, summary, steps, source, type } = unit;

    return (
        <>
            <Scroll style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 100 }}>
                <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
                <BulletList bullets={steps}/>
                {name === "VCOP" && <GraphicWrapper>
                    <Graphic source={{ uri: source }} />
                </GraphicWrapper>}
            </Scroll>
        </>
    );
};