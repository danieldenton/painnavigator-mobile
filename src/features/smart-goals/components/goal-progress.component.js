import React from "react";
import { ProgressBar } from "react-native-paper";
import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import startOfToday from 'date-fns/startOfToday';
import styled from "styled-components/native";

const EndDateWrapper = styled.View`
    align-items: flex-end;
    margin-top: 12px;
`;

const EndDateText = styled.Text`
    font-family: Inter_300Light;
    letter-spacing: .5px;
`;

export const GoalProgress = ({ startDate, endDate }) => {
    const daysLeft = differenceInDays(
        new Date(endDate),
        new startOfToday()
    );

    const formattedEndDate = format(new Date(endDate), 'MM/dd/yyyy');

    return(
        <>
            <ProgressBar 
                color={"#16A28B"}
                progress={(28 - daysLeft)/28} 
                style={{ backgroundColor: "#CBD7EB", borderRadius: 5, height: 10 }}
            />
            <EndDateWrapper>
                <EndDateText>
                    End date: {formattedEndDate}
                </EndDateText>
        </EndDateWrapper>
        </>
    );
};