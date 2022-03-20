import React, {useContext} from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Button } from "../../../components/button.component";
import { ButtonSection } from "../../education/components/education-unit.styles";

import { MovementContext } from "../../../services/movement/movement.context";

const CompletionScreenView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CompletionScreen = ({ navigation }) => {
    const { resetModuleScreen } = useContext(MovementContext);

    return (
        <>
            <CompletionScreenView>
                <Text>Module complete</Text>
            </CompletionScreenView>
            <ButtonSection>
                <Button onPress={() => {navigation.navigate("Today"); resetModuleScreen();}}>
                    Back to Dashboard
                </Button>
            </ButtonSection>
        </>
    );
};