import React from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon } from "../../../icons";
import { SubHeader } from "../../../components/typography.component";
import { DailyGoalCompleted } from "./daily-goal-completed.component";

export const DailyPainScore = ({ navigation, painScoreLoggedToday }) => {
  return (
    <>
      <SubHeader title={"TODAY'S PAIN SCORE"} size={14} />
      {painScoreLoggedToday ? (
        <DailyGoalCompleted type={"Daily Pain Score"} />
      ) : (
        <DailyActivitiesTile
          navigation={navigation}
          destination={"DailyPainScore"}
          title={"Log Your Daily Pain Score"}
          icon={<PainJournalIcon />}
        />
      )}
    </>
  );
};
