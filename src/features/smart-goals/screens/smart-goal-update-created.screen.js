import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { CongratulationsHeaderWrapper, CongratulationsHeader, CongratulationsMessage } from "../../../components/completion/components/completion.styles";

export const SmartGoalUpdateCreatedScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} navigation={navigation} destination={"Today"} />
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Nice work!
                </CongratulationsHeader>
                <CongratulationsMessage>
                    You are one step closer to reaching your goal!
                </CongratulationsMessage>
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