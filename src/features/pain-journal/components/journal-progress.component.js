import React from "react";
import styled from "styled-components/native";

const JournalProgressWrapper = styled.View`
    margin: ${(props) => props.theme.space[2]};
    align-items: center;
`;

const JournalProgressDots = styled.Text`
`;

export const JournalProgress = ({ currentQuestion }) => {
    return(
        <JournalProgressWrapper>
            <JournalProgressDots>{currentQuestion}</JournalProgressDots>
        </JournalProgressWrapper>
    );
};