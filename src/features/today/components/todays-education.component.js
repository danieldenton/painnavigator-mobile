import React, { useContext } from "react";
import { SubHeader } from "../../../components/typography.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { EducationContext } from "../../../services/education/education.context";
import { timeZonedTodaysDate } from "../../../utils";

export const TodaysEducation = ({ navigation }) => {
  const {
    completedAllEducationModules,
    lastEducationModuleId,
    lastCompletedEducationModuleDate,
  } = useContext(EducationContext);
  return (
    <>
      {!completedAllEducationModules ? (
        <>
          <SubHeader title={"TODAY'S EDUCATION"} size={14} />
          {lastCompletedEducationModuleDate === timeZonedTodaysDate ? (
            <DailyGoalCompleted
              type={"module"}
              moduleId={lastEducationModuleId}
            />
          ) : (
            <EducationUnitCard navigation={navigation} />
          )}
        </>
      ) : null}
    </>
  );
};
