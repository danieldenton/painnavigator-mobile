import React, { useContext} from "react";
import { SafeView } from "../../../components/safe-area.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { SmartGoalReflectionComponent } from "../components/smart-goal-reflection.component";
import { track } from "@amplitude/analytics-react-native";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const SmartGoalReflectionScreen = ({ navigation }) => {

    return (
         <SafeView>
                    <NavigationBarLeft 
                        screen={"Smart Goal"} 
                        destination={"SmartGoalCompleted"} 
                        navigation={navigation}
                    />
                    <SmartGoalReflectionComponent/>  
            <ButtonSection>
                <JournalButton 
                    // disabled={pages[currentPage].submitCondition ? false : true} 
                    title={"Finish Smart Goal"} 
                    onPress={() => (track(SMART_GOAL_EVENTS.ENTER_SMART_GOAL_REFLECTION), navigation.navigate("Today"))}
                />
                 <SkipQuestion
                    onPress={() => (track(SMART_GOAL_EVENTS.SKIP_SMART_GOAL_REFLECTION), navigation.navigate("Today"))}
                />
            </ButtonSection>
        </SafeView>
    );
}