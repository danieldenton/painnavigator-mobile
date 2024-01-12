import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { onboardPages } from "../data/onboard-pages-data";

export const ProfileSetupScreen = ({ navigation }) => {
  const {
    step,
    previousStep,
    nextStep,
    onboardingData,
    programSafety,
    handleEducationProgram,
    handleOtherPainTypeProgram
  } = useContext(AuthenticationContext);

  

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
