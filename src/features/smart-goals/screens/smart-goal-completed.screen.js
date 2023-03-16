import React from "react";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../../../components/completion/components/completion.styles";
import { CongratsGraphic } from "../../../graphics";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const SmartGoalCompletedScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"ReviewSmartGoal"} navigation={navigation} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
            <View style={{ marginBottom: 120 }}>
            <GraphicWrapper>
                <CongratsGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>Congratulations!</CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <CongratulationsMessageWrapper>
                <CongratulationsMessage>
                    You've completed your SMART goal!
                </CongratulationsMessage>
            </CongratulationsMessageWrapper>
            </View>
            </Scroll>
            <ButtonSection>
                <ModuleButton onPress={() => navigation.navigate("Today")} title={"Your Experience"} />
            </ButtonSection>
        </SafeView>
    );
};