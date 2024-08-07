import React, { useContext } from "react";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SkipButtonWrapper = styled.View`
    align-items: flex-end;
    margin-top: 8px;
    margin-bottom: -8px;
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

export const SkipButton = ({ skipVideo, resetVideo }) => {
    const { uid } = useContext(AuthenticationContext)
    return (
        <SkipButtonWrapper>
            <SkipButtonTouchable
                onPress={() => {skipVideo(uid); resetVideo();}}
            >
                <SkipButtonText>
                    SKIP VIDEO
                </SkipButtonText>
            </SkipButtonTouchable>
        </SkipButtonWrapper>
    );
};