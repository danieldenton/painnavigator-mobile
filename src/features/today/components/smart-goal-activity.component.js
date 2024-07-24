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
  const goal = (userCompletedSmartGoalUnit && activeGoal) || activeSmartGoal;
  const goalUpdatedToday =
    lastSmartGoalUpdate === timeZonedTodaysDate || smartGoalUpdatedToday;

  return (
    <>
      {goal ? (
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
