import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { GoalTextSection } from "../components/goal-text-section.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { TextInputLarge } from "../../../components/text-input.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { KeyboardView } from "../components/goal.styles";

export const NewSmartGoalUpdateScreen = ({ navigation, route }) => {
    const { activeGoal, smartGoalUpdate, changeUpdate, createSmartGoalUpdate } = useContext(SmartGoalContext);
    const { type } = route.params;

    return (
        <SafeView>
            <KeyboardView>
                <NavigationBarLeft 
                    destination={type === "DailyActivity" ? "Today" : "ReviewSmartGoal"}
                    screen={"Smart Goal"}
                    navigation={navigation}
                />
                <JournalQuestion 
                    question={"How is your goal going?"} 
                    helpText={"What steps have you made to reach your goal? How challenging has it been? As a reminder:"}
                />
                <GoalTextSection 
                    header={"Your SMART goal is:"} 
                    body={activeGoal.goal}
                />
                <GoalTextSection 
                    header={"Your steps to work up to this goal are:"} 
                    body={activeGoal.steps}
                />
                <TextInputLarge 
                    style={{ marginTop: 32 }} 
                    value={smartGoalUpdate}
                    onChangeText={changeUpdate}
                />
                </KeyboardView>
                <ButtonSection>
                    <JournalButton 
                        title={"Make Update"}
                        onPress={() => {navigation.navigate("SmartGoalUpdateCreated"); createSmartGoalUpdate();}}
                    />
                </ButtonSection>
        </SafeView>
    );
};  