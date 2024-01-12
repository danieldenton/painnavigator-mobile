import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const ProfileSetupScreen = ({ navigation }) => {
  const {
    step,
    setStep,
    previousStep,
    nextStep,
    onboardingData,
    setEducationProgram,
    programSafety,
  } = useContext(AuthenticationContext);

  const handleEducationProgram = () => {
    if (programSafety || onboardingData.typeOfPain === "Low Back Pain") {
      if (
        onboardingData.hopesToAchieve.length === 1 &&
        onboardingData.hopesToAchieve[0] === 4
      ) {
        if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(5);
        } else if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(6);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(4);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(3);
        }
      } else {
        if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(8);
        } else if (
          onboardingData.spineSurgery !== "No" &&
          onboardingData.painInjections === "No"
        ) {
          setEducationProgram(9);
        } else if (
          onboardingData.spineSurgery === "No" &&
          onboardingData.painInjections !== "No"
        ) {
          setEducationProgram(7);
        } else {
          return;
        }
      }
    } else {
      return;
    }
  };

  const handleOtherPainType = () => {
    setEducationProgram(10);
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
      {pages[step].component}
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
              ? handleOtherPainType()
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
