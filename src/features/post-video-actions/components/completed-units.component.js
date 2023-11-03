import React, { useContext } from "react";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import {
  CongratulationsHeaderWrapper,
  CongratulationsHeader,
  CongratulationsMessageWrapper,
  CongratulationsMessage,
} from "../../../components/completion/components/completion.styles";
import { ThumbsUpGraphic } from "../../../graphics";
import { MovementContext } from "../../../services/movement/movement.context";

export const CompletedUnits = () => {
  const { isMovement } = useContext(MovementContext);
  return (
        <>
          <GraphicWrapper>
            <ThumbsUpGraphic />
          </GraphicWrapper>
          <CongratulationsHeaderWrapper>
            <CongratulationsHeader>
              Congratulations! You've completed all of the{" "}
              {isMovement ? "movement" : "education"} units in your program!
            </CongratulationsHeader>
          </CongratulationsHeaderWrapper>
          <CongratulationsMessageWrapper>
            <CongratulationsMessage>
              You can revisit any of these videos at anytime. They can be found
              in the "Units" section in the side menu.
            </CongratulationsMessage>
          </CongratulationsMessageWrapper>
        </>
  );
};
