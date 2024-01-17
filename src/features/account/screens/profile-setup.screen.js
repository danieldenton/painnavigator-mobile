import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { Anxious } from "../../../components/onboard-coutcome/anxious";
import { UnableToStopWorrying } from "../../../components/onboard-coutcome/unable-to-stop-worrying";
import { LittleInterestOrPleasure } from "../../../components/onboard-coutcome/little-interest-or-pleasure";
import { Depressed } from "../../../components/onboard-coutcome/depressed";
import { TypeOfPain } from "../components/type-of-pain";
import { Other } from "../components/other";
import { PainInjections } from "../components/pain-injections";
import { SpineSurgery } from "../components/spine-surgery";
import { AlmostThere } from "../components/almost-there.component";

export const ProfileSetupScreen = ({ navigation }) => {
  const {
    step,
    previousStep,
    nextStep,
    onboardingData,
    programSafety,
    handleEducationProgram,
    handleOtherPainTypeProgram,
  } = useContext(AuthenticationContext);
  const {
    anxious,
    unableToStopWorrying,
    littleInterestOrPleasure,
    depressed,
    typeOfPain,
    hopesToAchieve,
    painInjections,
    spineSurgery,
  } = onboardingData;

  const onboardPages = [
    { component: <AvgPainPreStart />, disabled: false },
    { component: <EnjoymentOfLife />, disabled: false },
    { component: <ActivityInterference />, disabled: false },
    { component: <Anxious />, disabled: anxious ? false : true },
    {
      component: <UnableToStopWorrying />,
      disabled: unableToStopWorrying ? false : true,
    },
    {
      component: <LittleInterestOrPleasure />,
      disabled: littleInterestOrPleasure ? false : true,
    },
    { component: <Depressed />, disabled: depressed ? false : true },
    { component: <AlmostThere />, disabled: false },
    { component: <TypeOfPain />, disabled: typeOfPain ? false : true },
    {
      component: <HopeToAchieve />,
      disabled: hopesToAchieve.length > 0 ? false : true,
    },
    {
      component: (
        <PainInjections setState={setOnboardingData} data={onboardingData} />
      ),
      disabled: onboardingData.painInjections ? false : true,
    },
    {
      component: (
        <SpineSurgery setState={setOnboardingData} data={onboardingData} />
      ),
      disabled: onboardingData.spineSurgery ? false : true,
    },
    {
      component: <Other setState={setOnboardingData} data={onboardingData} />,
      disabled: onboardingData.typeOfPain ? false : true,
    },
  ];

  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Onboard"}
        navigation={navigation}
        screen={"Sign Up"}
        previousPage={step > 0 ? previousStep : null}
      />
      {onboardPages[step].component}
      <ButtonSection>
        <JournalButton
          disabled={pages[step].disabled}
          title={"Next"}
          onPress={() => {
            step >= 11
              ? (handleEducationProgram(), navigation.navigate("Register"))
              : step === 8 &&
                !programSafety &&
                onboardingData.typeOfPain !== "Low Back Pain"
              ? handleOtherPainTypeProgram()
              : nextStep();
          }}
        />
        {step === 12 ? (
          <ProgressDots progress={10} total={10} />
        ) : (
          <ProgressDots progress={step + 1} total={12} />
        )}
      </ButtonSection>
    </SafeView>
  );
};
