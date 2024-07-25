import React, { useContext, useEffect } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SubHeader } from "../../../components/typography.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { OngoingGoalTile } from "../components/ongoing-goal-tile.component";
import { TouchableCompletedItemCard } from "../../../components/card/touchable-completed-card.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { Add } from "../../../icons";

export const SmartGoalHomeScreen = ({ navigation }) => {
  const { activeGoal, finishedGoals, loadSmartGoals } =
    useContext(SmartGoalContext);

  useEffect(() => {
    loadSmartGoals();
  }, []);

  const finishedGoalElements = finishedGoals?.map((finishedGoal) => {
    return (
      <TouchableCompletedItemCard
        navigation={navigation}
        destination={"FinishedGoal"}
        goal={finishedGoal}
        key={finishedGoal.id}
      />
    );
  });

  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Today"}
        screen={"Smart Goals"}
        navigation={navigation}
      />
      <SubHeader
        title={"ONGOING GOALS"}
        size={14}
        marginTop={32}
        marginBottom={14}
      />
      {activeGoal ? (
        <OngoingGoalTile
          navigation={navigation}
          destination={"ReviewSmartGoal"}
          goal={activeGoal}
        />
      ) : (
        <DailyActivitiesTile
          title={"Create a Smart Goal"}
          destination={"NewSmartGoal"}
          navigation={navigation}
          icon={<Add />}
        />
      )}
      {finishedGoals.length > 0 && (
        <SubHeader title={"FINISHED GOALS"} size={14} marginBottom={14} />
      )}
      {finishedGoalElements}
    </SafeView>
  );
};
