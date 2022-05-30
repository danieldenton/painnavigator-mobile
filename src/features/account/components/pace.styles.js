import React from "react";
import { LeisurelyPace, JustRightPace, ZoomingPace } from "../../../icons";
import styled from "styled-components/native";

const PaceIndicatorWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 4px;
    margin-left: 4px;
    margin-top: 48px;
`;

const PaceIconWrapper = styled.View`
    align-items: center;
    margin-bottom: 12px;
    height: 55px;
    width: 55px;
`;

const PaceDotRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 25px;
    margin-left: 25px;
    margin-bottom: 16px;
`;

const PaceDot = styled.View`
    background-color: #CBD7EB;
    border-radius: 100px;
    height: 6px;
    width: 6px;
`;

export const PaceSelectionIndicator = () => {
    return (
        <>
        <PaceIndicatorWrapper>
            <PaceIconWrapper>
                <LeisurelyPace />
            </PaceIconWrapper>
            <PaceIconWrapper>
                <JustRightPace />
            </PaceIconWrapper>
            <PaceIconWrapper>
                <ZoomingPace />
            </PaceIconWrapper>
        </PaceIndicatorWrapper>
        <PaceDotRow>
            <PaceDot />
            <PaceDot />
            <PaceDot />
        </PaceDotRow>
        </>
    );
};

const PaceInfoWrapper = styled.View`
    margin-top: 42px;
`;

const PaceHeader = styled.Text`
    font-family: Inter_700Bold;
    font-size: 16px;
`;

const PaceBody = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    line-height: 33px;
`;

export const PaceSelectionInfo = ({ pace }) => {
    return (
        <PaceInfoWrapper>
            <PaceHeader>
                {pace === 0 && "Leisurely"}
                {pace === 1 && "Just Right"}
                {pace === 2 && "Zooming"}
                :
            </PaceHeader>
            <PaceBody>
                {pace === 0 && "Leisurely"}
                {pace === 1 && "Just Right"}
                {pace === 2 && "Zooming"}
            </PaceBody>
        </PaceInfoWrapper>
    );
};

export const ProjectedEndDate = ({ pace }) => {
    return (
        <PaceInfoWrapper>
            <PaceHeader>
                Projected End Date:
            </PaceHeader>
            <PaceBody>
                {pace === 0 && "Leisurely"}
                {pace === 1 && "Just Right"}
                {pace === 2 && "Zooming"}
            </PaceBody>
        </PaceInfoWrapper>
    );
};