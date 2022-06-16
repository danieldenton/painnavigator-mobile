import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ThumbsUpGraphic } from "../../../graphics";
import { CongratulationsHeaderWrapper, CongratulationsHeader, CongratulationsMessage, CongratulationsMessageWrapper } from "../../../components/completion/components/completion.styles";

export const SmartGoalUpdateCreatedScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} navigation={navigation} destination={"Today"} />
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Nice work!
                </CongratulationsHeader>
                <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        You are one step closer to reaching your goal!
                    </CongratulationsMessage>
                </CongratulationsMessageWrapper>
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"Back to Dashboard"}
                    onPress={() => { navigation.navigate("Today") }}
                />
            </ButtonSection>
        </SafeView>
    );
};