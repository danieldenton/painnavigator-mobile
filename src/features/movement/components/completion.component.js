import React from "react";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
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
