import React from "react";
import styled from "styled-components/native";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

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

export const SkippedScreen = () => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            <CongratulationsSection>
                <CongratulationsHeader>Skipped for now!</CongratulationsHeader>
                <CongratulationsMessage>
                    You can revisit this module later on by navigating to the Units page from the dashboard side menu.
                </CongratulationsMessage>
            </CongratulationsSection>
            <ButtonSection>
                <ModuleButton onPress={() => navigation.navigate("Today")} title={"Back to Dashboard"} />
            </ButtonSection>
        </SafeView>
    );
};