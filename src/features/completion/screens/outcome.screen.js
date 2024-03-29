import React, { useContext, useState, useEffect } from "react";
import { OutcomeContext } from "../../../services/outcome.context";
import { Recommend } from "../components/recommend.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { Anxious } from "../../../components/onboard-coutcome/anxious";
import { UnableToStopWorrying } from "../../../components/onboard-coutcome/unable-to-stop-worrying";
import { LittleInterestOrPleasure } from "../../../components/onboard-coutcome/little-interest-or-pleasure";
import { Depressed } from "../../../components/onboard-coutcome/depressed";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const OutcomeScreen = ({ navigation }) => {
  const { completeProgram, outcomeData, setOutcomeData } =
    useContext(OutcomeContext);
  const {
    enjoymentOfLife,
    activityInterference,
    anxious,
    unableToStopWorrying,
    littleInterestOrPleasure,
    depressed,
  } = outcomeData;
  const [outcomeStep, setOutcomeStep] = useState(0);


  pages = [
    { component: <Recommend />, disabled: false },
    {
      component: (
        <EnjoymentOfLife setState={setOutcomeData} value={enjoymentOfLife} />
      ),
      disabled: false,
    },
    {
      component: (
        <ActivityInterference
          setState={setOutcomeData}
          value={activityInterference}
        />
      ),
      disabled: false,
    },
    {
      component: <Anxious setState={setOutcomeData} value={anxious} />,
      disabled: anxious ? false : true,
    },
    {
      component: (
        <UnableToStopWorrying
          setState={setOutcomeData}
          value={activityInterference}
        />
      ),
      disabled: unableToStopWorrying ? false : true,
    },
    {
      component: (
        <LittleInterestOrPleasure
          setState={setOutcomeData}
          value={littleInterestOrPleasure}
        />
      ),
      disabled: littleInterestOrPleasure ? false : true,
    },
    {
      component: <Depressed setState={setOutcomeData} value={depressed} />,
      disabled: depressed ? false : true,
    },
  ];

  const handleCompleteProgram = () => {
    completeProgram();
    navigation.navigate("ProgramCompleted");
  };
  console.log(outcomeStep);

  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Today"}
        navigation={navigation}
        screen={"Outcome"}
        previousPage={
          outcomeStep > 0 ? setOutcomeStep((outcomeStep) => outcomeStep - 1) : null
        }
      />
      {pages[outcomeStep].component}
      <ButtonSection>
        <JournalButton
          disabled={pages[outcomeStep].disabled}
          title={"Next"}
          onPress={() => {
            outcomeStep === 6 ? handleCompleteProgram() : setOutcomeStep(outcomeStep + 1);
          }}
        />
        <ProgressDots progress={outcomeStep + 1} total={7} />
      </ButtonSection>
    </SafeView>
  );
};
