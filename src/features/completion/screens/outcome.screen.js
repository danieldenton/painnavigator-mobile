import React, { useContext } from "react";
import { OutcomeContext } from "../../../services/outcome.context";
import { OnboardContext } from "../../../services/onboard.context";
import { AuthenticationContext } from "../../../services/authentication.context";
import { Recommend } from "../components/recommend.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { Anxious } from "../../../components/onboard-coutcome/anxious";
import { UnableToStopWorrying } from "../../../components/onboard-coutcome/unable-to-stop-worrying";
import { LittleInterestOrPleasure } from "../../../components/onboard-coutcome/little-interest-or-pleasure";
import { Depressed } from "../../../components/onboard-coutcome/depressed";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";

export const OutcomeScreen = ({ navigation }) => {
  const { uid } = useContext(AuthenticationContext);
  const { completeProgram, outcomeData, setOutcomeData } =
    useContext(OutcomeContext);
  const { step, nextStep, previousStep } = useContext(OnboardContext);
  const {
    recommendation,
    enjoymentOfLife,
    activityInterference,
    anxious,
    unableToStopWorrying,
    littleInterestOrPleasure,
    depressed,
  } = outcomeData;

  const outcomePages = [
    {
      component: <Recommend setState={setOutcomeData} value={recommendation} />,
      disabled: false,
    },
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
          value={unableToStopWorrying}
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
    completeProgram(uid);
    navigation.navigate("ProgramCompleted");
  };

  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Today"}
        navigation={navigation}
        screen={"Outcome"}
        previousPage={step > 0 ? previousStep : null}
      />
      {outcomePages[step].component}
      <ButtonSection>
        <JournalButton
          disabled={outcomePages[step].disabled}
          title={"Next"}
          onPress={() => {
            step === 6 ? handleCompleteProgram() : nextStep();
          }}
        />
        <ProgressDots progress={step + 1} total={7} />
      </ButtonSection>
    </SafeView>
  );
};
