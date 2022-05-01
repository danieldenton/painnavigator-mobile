import React from "react";
import styled from "styled-components/native";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

const CongratulationsSection = styled.View`
    align-items: center;
`;

const CongratulationsHeader = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 25px;
    margin-bottom: 32px;
`;

const CongratulationsMessage = styled.Text`
    font-family: Inter_400Regular;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 26px;
`;

export const CompletionScreen = ({ navigation, resetModule }) => {
    return (
        <>
            <CongratulationsSection>
                <CongratulationsHeader>Congratulations</CongratulationsHeader>
                <CongratulationsMessage>You completed your first education unit! You’re on your way to mastering new skills and redefining your relationship with pain. </CongratulationsMessage>
            </CongratulationsSection>
            <ButtonSection>
                <ModuleButton onPress={() => {navigation.navigate("Today"); resetModule();}} title={"Back to Dashboard"} />
            </ButtonSection>
        </>
    );
};