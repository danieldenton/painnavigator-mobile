import React, { useContext } from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon } from "../../../icons";
import { SubHeader } from "../../../components/typography.component";
import { DailyGoalCompleted } from "./daily-goal-completed.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";

export const DailyPainScore = ({ navigation }) => {
  const { painScoreLoggedToday } = useContext(DailyPainContext);
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
