import React, {useContext} from "react";
import styled from "styled-components/native";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { ThumbsUpGraphic } from "../../../graphics";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

const CongratulationsSection = styled.View`
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
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
    text-align: center;
`;

export const CompletionScreen = ({ navigation }) => {
    const { resetModule, movementProgress } = useContext(MovementContext);

    return (
        <SafeView>
            <NavigationBarLeft screen={"Movement"} navigation={navigation} destination={"Today"} />
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsSection>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
                <CongratulationsMessage>
                    {movementProgress === 36 ? 
                    "You've completed all of the education units in your program! You can revisit any of these videos at anytime. They can be found in the 'Units' section in the side menu."
                    : "You completed a movement unit! You’re on your way to mastering new skills and redefining your relationship with pain."}
                </CongratulationsMessage>
            </CongratulationsSection>
            <ButtonSection>
                <ModuleButton 
                    title={"Back to Dashboard"} 
                    onPress={() => { navigation.navigate("Today"); resetModule(); }} 
                />
            </ButtonSection>
        </SafeView>
    );
};