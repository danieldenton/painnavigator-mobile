import React, {useContext} from "react";
import styled from "styled-components/native";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { ThumbsUpGraphic } from "../../../graphics";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

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
`;

export const CompletionScreen = ({ navigation }) => {
    const { resetModule } = useContext(MovementContext);

    return (
        <>
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
            <View style={{ marginBottom: 60 }}>
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsSection>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
                <CongratulationsMessage>
                    You completed a movement unit! 
                    You’re on your way to mastering 
                    new skills and redefining your 
                    relationship with pain. 
                </CongratulationsMessage>
            </CongratulationsSection>
            </View>
            </Scroll>
            <ButtonSection>
                <ModuleButton 
                    title={"Back to Dashboard"} 
                    onPress={() => { navigation.navigate("Today"); resetModule(); }} 
                />
            </ButtonSection>
        </>
    );
};