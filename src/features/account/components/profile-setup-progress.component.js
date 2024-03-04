import React from "react";
import styled from "styled-components/native";

const ProgressWrapper = styled.View`
    margin: ${(props) => props.theme.space[2]};
    align-items: center;
`;

const ProgressDots = styled.Text`
`;

export const ProfileProgress = ({ profileProgress }) => {
    return(
        <ProgressWrapper>
            <ProgressDots>{profileProgress}</ProgressDots>
        </ProgressWrapper>
    );
};