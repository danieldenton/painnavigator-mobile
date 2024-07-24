import { useContext } from "react";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { DailyGoalCompleted } from "./daily-goal-completed.component";
import { NewSmartGoal, SmartGoalUpdate } from "./small-daily-activities";
import { timeZonedTodaysDate } from "../../../utils";

export const SmartGoalActivity = ({
  navigation,
  userCompletedSmartGoalUnit,
  smartGoalUpdatedToday,
  activeSmartGoal,
}) => {
  const { activeGoal, lastSmartGoalUpdate } = useContext(SmartGoalContext);
  const goalUpdatedToday =
    lastSmartGoalUpdate === timeZonedTodaysDate || smartGoalUpdatedToday;

  return (
    <>
      {activeGoal || activeSmartGoal ? (
        goalUpdatedToday ? (
          <DailyGoalCompleted type={"Smart Goal Update"} />
        ) : (
          <SmartGoalUpdate navigation={navigation} />
        )
      ) : (
        <NewSmartGoal navigation={navigation} />
      )}
    </>
  );
};
