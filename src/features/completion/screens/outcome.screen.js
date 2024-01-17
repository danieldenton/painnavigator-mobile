import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
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
import { track } from "@amplitude/analytics-react-native";
import { COMPLETION_EVENTS } from "../../../amplitude-events";

export const OutcomeScreen = ({ navigation }) => {
  const {
    step,
    previousStep,
    nextStep,
    completeProgram,
    outcomeData,
    setOutcomeData,
  } = useContext(AuthenticationContext);
  const { enjoymentOfLife } = outcomeData;

  pages = [
    { component: <Recommend />, disabled: false },
    {
      component: <EnjoymentOfLife setState={setOutcomeData} value={enjoymentOfLife} />,
      disabled: false,
    },
    {
      component: (
        <ActivityInterference
          onValueChange={changeOutcomeEntry}
          data={outcomeData}
        />
      ),
      disabled: false,
    },
    {
      component: (
        <Anxious onValueChange={changeOutcomeEntry} data={outcomeData} />
      ),
      disabled: outcomeData.anxious ? false : true,
    },
    {
      component: (
        <UnableToStopWorrying
          onValueChange={changeOutcomeEntry}
          data={outcomeData}
        />
      ),
      disabled: outcomeData.unableToStopWorrying ? false : true,
    },
    {
      component: (
        <LittleInterestOrPleasure
          onValueChange={changeOutcomeEntry}
          data={outcomeData}
        />
      ),
      disabled: outcomeData.littleInterestOrPleasure ? false : true,
    },
    {
      component: (
        <Depressed onValueChange={changeOutcomeEntry} data={outcomeData} />
      ),
      disabled: outcomeData.depressed ? false : true,
    },
  ];

  const handleCompletProgram = () => {
    completeProgram();
    navigation.navigate("ProgramCompleted");
    track(COMPLETION_EVENTS.COMPLETE_PROGRAM);
  };

  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Today"}
        navigation={navigation}
        screen={"Outcome"}
        previousPage={step > 0 ? previousStep : null}
      />
      {pages[step].component}
      <ButtonSection>
        <JournalButton
          disabled={pages[step].disabled}
          title={"Next"}
          onPress={() => {
            step === 6 ? handleCompletProgram() : nextStep();
          }}
        />
        <ProgressDots progress={step + 1} total={7} />
      </ButtonSection>
    </SafeView>
  );
};
