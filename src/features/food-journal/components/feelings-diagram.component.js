import React from "react";
import styled from "styled-components/native";
import { 
    HappyFaceSelected, 
    NeutralFaceSelected, 
    RightArrow,
    SadFaceSelected 
} from "../../../icons";

const Feelings = styled.View`
    flex-direction: row;
    align-items: center;
`;

const FeelingFaceWrapper = styled.View`
`;

const ArrowWrapper = styled.View`
    margin-left: 16px; 
    margin-right: 16px;
`;

export const FeelingsDiagram = ({ feelingBefore, feelingAfter }) => {
    return (
        <Feelings>
            <FeelingFaceWrapper>
                {feelingBefore === "happy" && <HappyFaceSelected />}
                {feelingBefore === "neutral" && <NeutralFaceSelected />}
                {feelingBefore === "sad" && <SadFaceSelected />}
            </FeelingFaceWrapper>
            <ArrowWrapper>
                <RightArrow />
            </ArrowWrapper>
            <FeelingFaceWrapper>
                {feelingAfter === "happy" && <HappyFaceSelected />}
                {feelingAfter === "neutral" && <NeutralFaceSelected />}
                {feelingAfter === "sad" && <SadFaceSelected />}
            </FeelingFaceWrapper>
        </Feelings>
    );
};