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

export const CompletionComponent = ({ completionMessage }) => {

  return (
    <>
      <GraphicWrapper>
        <ThumbsUpGraphic />
      </GraphicWrapper>
      <CongratulationsHeaderWrapper>
        <CongratulationsHeader>Congratulations!</CongratulationsHeader>
      </CongratulationsHeaderWrapper>
      <CongratulationsMessageWrapper>
        <CongratulationsMessage>{completionMessage}</CongratulationsMessage>
      </CongratulationsMessageWrapper>
    </>
  );
};
