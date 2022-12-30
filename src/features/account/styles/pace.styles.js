import React from "react";
import { LeisurelyPace, JustRightPace, ZoomingPace } from "../../../icons";
import styled from "styled-components/native";
import format from 'date-fns/format';
import add from 'date-fns/add';

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
    margin-top: 16px;
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

    const paceHeader = (pace) => {
        switch (pace) {
          case 0:
            return "Leisurely";
          case 1:
            return "Just Right";
          case 2:
            return "Zooming";
          default:
            return "";
        }
    };

    const paceBody = (pace) => {
        switch (pace) {
          case 0:
            return "4x/week, 15 minutes per session";
          case 1:
            return "5x/week, 15 minutes per session";
          case 2:
            return "7x/week (everyday), 15 minutes per session";
          default:
            return "";
        }
    };

    return (
        <PaceInfoWrapper>
            <PaceHeader>
                {paceHeader(pace)}:
            </PaceHeader>
            <PaceBody>
                {paceBody(pace)}
            </PaceBody>
        </PaceInfoWrapper>
    );
};

export const ProjectedEndDate = ({ pace }) => {

    const endDate = (pace) => {
        switch (pace) {
          case 0:
            const leisurelyResult = add(new Date(), { weeks: 12 });
            const leisurelyEndDate = format(leisurelyResult, "MMMM do, yyyy");
            return leisurelyEndDate;
          case 1:
            const justRightResult = add(new Date(), { weeks: 9 });
            const justRightEndDate = format(justRightResult, "MMMM do, yyyy");
            return justRightEndDate;
          case 2:
            const zoomingResult = add(new Date(), { weeks: 6 });
            const zoomingEndDate = format(zoomingResult, "MMMM do, yyyy");
            return zoomingEndDate;
          default:
            return "";
        }
    };

    return (
        <PaceInfoWrapper>
            <PaceHeader>
                Projected End Date:
            </PaceHeader>
            <PaceBody>
                {endDate(pace)}
            </PaceBody>
        </PaceInfoWrapper>
    );
};