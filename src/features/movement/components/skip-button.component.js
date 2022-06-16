import React from "react";
import styled from "styled-components/native";

const SkipButtonWrapper = styled.View`
    align-items: flex-end;
    margin-top: 16px;
    width: 100%;
`;

const SkipButtonTouchable = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border: 1.5px black;
    border-radius: 2px;
    height: 37px;
    width: 133px;
`;

const SkipButtonText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 14px;
`;

export const SkipButton = ({ handlePress, resetVideo }) => {
    return (
        <SkipButtonWrapper>
            <SkipButtonTouchable
                onPress={() => {handlePress(); resetVideo();}}
            >
                <SkipButtonText>
                    SKIP VIDEO
                </SkipButtonText>
            </SkipButtonTouchable>
        </SkipButtonWrapper>
    );
};