import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Scroll } from "../../../components/scroll.component";
import { BulletList } from "../../../components/bullet-list.component";
import { View } from "react-native";
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

export const TextUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { id, name, summary, steps, source, type } = currentModule;

    return (
        <>
            <Scroll style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 100 }}>
                <View style={{ marginBottom: 60 }}>
                    <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
                    <BulletList bullets={steps}/>
                    {name === "VCOP" && <GraphicWrapper>
                        <Graphic source={{ uri: source }} />
                    </GraphicWrapper>}
                </View>
            </Scroll>
        </>
    );
};