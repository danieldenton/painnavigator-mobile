import React, { useContext } from "react";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { ThumbsUpGraphic } from "../../../graphics";
import {
    CongratulationsHeaderWrapper,
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage,
  } from "../../../components/completion/completion.styles";


export const CompletionComponent = () => {
  const { movementProgress } = useContext(MovementContext);

  return (
    <>
      <GraphicWrapper>
        <ThumbsUpGraphic />
      </GraphicWrapper>
      <CongratulationsHeaderWrapper>
        <CongratulationsHeader>Congratulations!</CongratulationsHeader>
      </CongratulationsHeaderWrapper>
      <CongratulationsMessageWrapper>
        <CongratulationsMessage>
          {movementProgress > 35
            ? "You've completed all of the education units in your program! You can revisit any of these videos at anytime. They can be found in the 'Units' section in the side menu."
            : "You completed a movement unit! You’re on your way to mastering new skills and redefining your relationship with pain."}
        </CongratulationsMessage>
      </CongratulationsMessageWrapper>
    </>
  );
};
