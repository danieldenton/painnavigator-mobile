import React from "react";
import styled from "styled-components/native";
import { JournalButton } from "../button.component";
import { JournalContainer, ButtonSection } from "./journal.styles";

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

export const Congratulations = ({ journalType, navigation, setJournalComplete }) => {
    const journalCount = 0;

    return(
        <JournalContainer>
            <CongratulationsSection>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
                <CongratulationsMessage>You {journalCount > 0 ? "logged a" : "finished your first"} {journalType} Journal.</CongratulationsMessage>
                <CongratulationsMessage>Keep up the hard work!</CongratulationsMessage>
            </CongratulationsSection>
            <ButtonSection>
                <JournalButton 
                    onPress={() => {
                        navigation.navigate("Today"); 
                        setTimeout(() => {setJournalComplete(false)}, 1000);
                    }}
                    title={"RETURN HOME"}
                />
            </ButtonSection>
        </JournalContainer>
    );
};