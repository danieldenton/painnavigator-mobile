import React, { useContext } from "react";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import {
  CongratulationsHeaderWrapper,
  CongratulationsHeader,
  CongratulationsMessageWrapper,
  CongratulationsMessage,
} from "../../../components/completion/completion.styles";
import { ThumbsUpGraphic } from "../../../graphics";

export const CompletedUnits = () => {
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
          You've completed all of the education units in your program! You can
          revisit any of these videos at anytime. They can be found in the
          "Units" section in the side menu.
        </CongratulationsMessage>
      </CongratulationsMessageWrapper>
    </>
  );
};
