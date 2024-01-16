import { JournalQuestion } from "./journal-question.component";
import { IntensitySlider } from "./slider.component";

export const JournalQuestionAndIntensitySlider = ({
  question,
  helpText,
  setState,
  key,
  value,
}) => {
  return (
    <>
      <JournalQuestion question={question} helpText={helpText} />
      <IntensitySlider setState={setState} key={key} value={value} />
    </>
  );
};
