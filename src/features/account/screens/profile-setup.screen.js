import React, { useContext } from "react";
import { OnboardContext } from "../../../services/onboard.context";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { AvgPainPreStart } from "../components/avg-pain-pre-start.component";
import { EnjoymentOfLife } from "../../../components/onboard-coutcome/enjoyment-of-life.component";
import { ActivityInterference } from "../../../components/onboard-coutcome/activity-interference.component";
import { HopeToAchieve } from "../components/hope-to-achieve.component";
import { TypeOfPain } from "../components/type-of-pain";
import { PainInjections } from "../components/pain-injections";
import { SpineSurgery } from "../components/spine-surgery";

export const ProfileSetupScreen = ({ navigation }) => {
  const {
    step,
    setStep,
    previousStep,
    nextStep,
    onboardingData,
    handleEducationProgram,
    setOnboardingData,
  } = useContext(OnboardContext);
  const {
    enjoymentOfLife,
    activityInterference,
    typeOfPain,
    hopesToAchieve,
    painInjections,
    spineSurgery,
  } = onboardingData;
  const spineSurgeryQuestion = typeOfPain === "Low Back Pain" ? 6 : 5;

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
      component: (
        <HopeToAchieve setState={setOnboardingData} value={hopesToAchieve} />
      ),
      disabled: hopesToAchieve.length > 0 ? false : true,
    },
    { component: <TypeOfPain />, disabled: typeOfPain ? false : true },
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
          disabled={onboardPages[step].disabled}
          title={"Next"}
          onPress={() => {
            step === spineSurgeryQuestion
              ? (handleEducationProgram(), navigation.navigate("Register"))
              : nextStep();
          }}
        />
        <ProgressDots progress={step + 1} total={spineSurgeryQuestion + 1} />
      </ButtonSection>
    </SafeView>
  );
};
