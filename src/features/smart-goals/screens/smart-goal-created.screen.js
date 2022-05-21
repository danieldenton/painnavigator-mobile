import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { GoalTextSection } from "../components/goal-text-section.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader 
} from "../../../components/completion/components/completion.styles";

export const SmartGoalCreatedScreen = ({ navigation }) => {
    const { smartGoal, resetSmartGoal } = useContext(SmartGoalContext);

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} navigation={navigation} destination={"Today"} />
            <CongratulationsHeaderWrapper>
                <CongratulationsHeader>
                    Congratulations!
                </CongratulationsHeader>
                <CongratulationsHeader>
                    You Created a New 
                </CongratulationsHeader>
                <CongratulationsHeader>
                    SMART Goal!
                </CongratulationsHeader>
            </CongratulationsHeaderWrapper>
            <GoalTextSection header={"Your SMART Goal is:"} body={smartGoal.goal} />
            <GoalTextSection header={"Your steps to work up to this goal are:"} body={smartGoal.steps} />
            <GoalTextSection header={"Your reward will be: "} body={smartGoal.reward} />
            <ButtonSection>
                <JournalButton 
                    title={"I got this!"}
                    onPress={() => {navigation.navigate("Today"); resetSmartGoal();}}
                />
                <ProgressDots progress={3} total={3} />
            </ButtonSection>
        </SafeView>
    )
};