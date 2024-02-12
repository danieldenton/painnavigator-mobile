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
import { Other, OtherTypeOfPain } from "../components/other-type-of-pain";
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
    setEducationProgram,
  } = useContext(AuthenticationContext);
  const {
    enjoymentOfLife,
    activityInterference,
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
    {
      component: (
        <EnjoymentOfLife setState={setOnboardingData} value={enjoymentOfLife} />
      ),
      disabled: false,
    },
    {
      component: (
        <ActivityInterference
          setState={setOnboardingData}
          value={activityInterference}
        />
      ),
      disabled: false,
    },
    {
      component: <Anxious setState={setOnboardingData} value={anxious} />,
      disabled: anxious ? false : true,
    },
    {
      component: (
        <UnableToStopWorrying
          setState={setOnboardingData}
          value={unableToStopWorrying}
        />
      ),
      disabled: unableToStopWorrying ? false : true,
    },
    {
      component: (
        <LittleInterestOrPleasure
          setState={setOnboardingData}
          value={littleInterestOrPleasure}
        />
      ),
      disabled: littleInterestOrPleasure ? false : true,
    },
    {
      component: <Depressed setState={setOnboardingData} value={depressed} />,
      disabled: depressed ? false : true,
    },
    { component: <AlmostThere />, disabled: false },
    { component: <TypeOfPain />, disabled: typeOfPain ? false : true },
    {
      component: (
        <HopeToAchieve setState={setOnboardingData} value={hopesToAchieve} />
      ),
      disabled: hopesToAchieve.length > 0 ? false : true,
    },
    {
      component: (
        <PainInjections setState={setOnboardingData} value={painInjections} />
      ),
      disabled: painInjections ? false : true,
    },
    {
      component: (
        <SpineSurgery setState={setOnboardingData} value={spineSurgery} />
      ),
      disabled: spineSurgery ? false : true,
    },
    {
      component: (
        <OtherTypeOfPain setState={setOnboardingData} value={typeOfPain} />
      ),
      disabled: typeOfPain ? false : true,
    },
  ];

  const handleOtherPainTypeProgram = () => {
    if (
      onboardingData.hopesToAchieve.length === 1 &&
      onboardingData.hopesToAchieve[0] === "Strength & Prevention"
    ) {
      setEducationProgram(11);
    } else {
      setEducationProgram(10);
    }
    if (onboardingData.typeOfPain === "Other") {
      setStep(12);
      onboardingData.typeOfPain = "";
    } else {
      navigation.navigate("Register");
    }
  };

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
          disabled={onboardPages[step].disabled}
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
