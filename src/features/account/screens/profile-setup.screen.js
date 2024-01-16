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
    setOnboardingData,
    programSafety,
    handleEducationProgram,
    handleOtherPainTypeProgram,
  } = useContext(AuthenticationContext);

  const onboardPages = [
    { component: <AvgPainPreStart />, disabled: false },
    {
      component: (
        <EnjoymentOfLife
          setState={setOnboardingData}
          data={onboardingData}
        />
      ),
      disabled: false,
    },
    {
      component: (
        <ActivityInterference
          onValueChange={changeOnboardEntry}
          data={onboardingData}
        />
      ),
      disabled: false,
    },
    {
      component: (
        <Anxious onValueChange={changeOnboardEntry} data={onboardingData} />
      ),
      disabled: onboardingData.anxious ? false : true,
    },
    {
      component: (
        <UnableToStopWorrying
          onValueChange={changeOnboardEntry}
          data={onboardingData}
        />
      ),
      disabled: onboardingData.unableToStopWorrying ? false : true,
    },
    {
      component: (
        <LittleInterestOrPleasure
          onValueChange={changeOnboardEntry}
          data={onboardingData}
        />
      ),
      disabled: onboardingData.littleInterestOrPleasure ? false : true,
    },
    {
      component: (
        <Depressed onValueChange={changeOnboardEntry} data={onboardingData} />
      ),
      disabled: onboardingData.depressed ? false : true,
    },
    { component: <AlmostThere />, disabled: false },
    {
      component: (
        <TypeOfPain onValueChange={changeOnboardEntry} data={onboardingData} />
      ),
      disabled: onboardingData.typeOfPain ? false : true,
    },
    {
      component: <HopeToAchieve />,
      disabled: onboardingData.hopesToAchieve.length > 0 ? false : true,
    },
    {
      component: (
        <PainInjections
          onValueChange={changeOnboardEntry}
          data={onboardingData}
        />
      ),
      disabled: onboardingData.painInjections ? false : true,
    },
    {
      component: (
        <SpineSurgery
          onValueChange={changeOnboardEntry}
          data={onboardingData}
        />
      ),
      disabled: onboardingData.spineSurgery ? false : true,
    },
    {
      component: (
        <Other onValueChange={changeOnboardEntry} data={onboardingData} />
      ),
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
