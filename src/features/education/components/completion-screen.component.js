import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Button } from "../../../components/button.component";
import { ButtonSection } from "../components/education-unit.styles";

const CompletionScreenView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CompletionScreen = ({ navigation }) => {
    return (
        <>
            <CompletionScreenView>
                <Text>Module complete</Text>
            </CompletionScreenView>
            <ButtonSection>
                <Button onPress={() => {navigation.navigate("Today")}}>
                    Back to Dashboard
                </Button>
            </ButtonSection>
        </>
    );
};