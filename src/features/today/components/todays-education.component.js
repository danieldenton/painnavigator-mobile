import React, { useContext } from "react";
import { SubHeader } from "../../../components/typography.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { DailyGoalCompleted } from "../components/daily-goal-completed.component";
import { EducationContext } from "../../../services/education/education.context";
import { timeZonedTodaysDate } from "../../../utils";

export const TodaysEducation = ({ navigation, educationToday }) => {
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
          {lastCompletedEducationModuleDate === timeZonedTodaysDate ||
          educationToday ? (
            <>
              <DailyGoalCompleted
                type={"module"}
                moduleId={
                  lastEducationModuleId ? lastEducationModuleId : educationToday
                }
              />
              <EducationUnitCard navigation={navigation} />
            </>
          ) : (
            <EducationUnitCard navigation={navigation} />
          )}
        </>
      ) : null}
    </>
  );
};
