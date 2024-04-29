import React, { useContext } from "react";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";
import { SubHeader } from "../../../components/typography.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { timeZonedTodaysDate } from "../../../utils";

export const TodaysMovement = ({ navigation, isFocused }) => {
  const {
    movementModulesComplete,
    lastModuleCompleted,
    moduleComplete,
    movementProgram,
  } = useContext(MovementContext);
  return (
    <>
      {movementModulesComplete ? (
        <>
          <SubHeader title={"TODAY'S MOVEMENT"} size={14} />
          {lastModuleCompleted.dateCompleted === timeZonedTodaysDate ||
          moduleComplete ? (
            <DailyGoalCompleted
              type={"movementModule"}
              moduleId={lastModuleCompleted.moduleId}
              movementProgram={movementProgram}
            />
          ) : (
            <MovementUnitCard navigation={navigation} isFocused={isFocused} />
          )}
        </>
      ) : null}
    </>
  );
};
