import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
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
  const {
    loadSmartGoals,
    activeGoal,
    smartGoalUpdate,
    changeUpdate,
    createSmartGoalUpdate,
    isLoading,
  } = useContext(SmartGoalContext);
  const { type } = route.params;

  useEffect(() => {
    loadSmartGoals();
  }, []);

  return (
    <SafeView>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#37b29d"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : (
        <>
          <KeyboardView>
            <NavigationBarLeft
              destination={
                type === "DailyActivity" ? "Today" : "ReviewSmartGoal"
              }
              screen={"Smart Goal"}
              navigation={navigation}
            />
            <JournalQuestion
              question={"How is your goal going?"}
              helpText={
                "What steps have you made to reach your goal? How challenging has it been? As a reminder:"
              }
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
              onPress={() => {
                navigation.navigate("SmartGoalUpdateCreated");
                createSmartGoalUpdate();
              }}
            />
          </ButtonSection>
        </>
      )}
    </SafeView>
  );
};
