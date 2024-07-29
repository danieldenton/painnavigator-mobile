import React, { useContext, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AudioUnit } from "../components/audio-unit.component";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { PNIntroUnit } from "../components/pn-intro-unit.component";
import { SafeView } from "../../../components/safe-area.component";
import {
  NavigationBarLeft,
  TextModuleNavBar,
} from "../../../components/journals/navigation-bar.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { SkipQuestion } from "../../../components/skip-question.component";
import { StackActions } from "@react-navigation/native";

export const EducationUnitScreen = ({ navigation }) => {
  const {
    completeModule,
    currentModule,
    skipModule,
    educationIntroStep,
    setEducationIntroStep,
    educationProgress,
    injectionModuleType
  } = useContext(EducationContext);
  const { setIsMovement } = useContext(MovementContext);
  const { uid } = useContext(AuthenticationContext);
  const { post_video_destination, type, skippable, id } = currentModule;
  const introLength = injectionModuleType !== null ? 5 : 4
  const pnIntroModule = educationProgress === 1 && educationIntroStep < introLength

  useEffect(() => {
    setIsMovement(false);
  }, []);

  const typesOfComponents = [
    {
      type: "video",
      component: <VideoUnit />,
    },
    {
      type: "audio",
      component: <AudioUnit unit={currentModule} />,
    },
    {
      type: "text",
      component: <TextUnit />,
    },
    {
      type: "intro-text",
      component: <PNIntroUnit />
    }
  ];

  const componentObject = typesOfComponents.find((obj) => type === obj.type);

  const postVideoAction = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    completeModule(uid);
    if (post_video_destination) {
      const PAIN_JOURNAL_HOME = post_video_destination === "PainJournalHome";
      navigation.dispatch(
        StackActions.replace(
          PAIN_JOURNAL_HOME ? post_video_destination : "Why",
          {
            post_video_destination: post_video_destination,
          }
        )
      );
    } else {
      navigation.dispatch(StackActions.replace("Completion"));
    }
  };

  return (
    <SafeView>
      {type === "video" ? (
        <NavigationBarLeft
          screen={"Education"}
          destination={"Today"}
          navigation={navigation}
          orientation={true}
        />
      ) : (
        <TextModuleNavBar
          screen={"Education"}
          destination={"Today"}
          navigation={navigation}
          id={id}
        />
      )}
      {componentObject.component}
      <ButtonSection>
        <ModuleButton
          onPress={() => {
            pnIntroModule
              ? setEducationIntroStep(
                  (educationIntroStep) => educationIntroStep + 1
                )
              : postVideoAction();
          }}
          title={pnIntroModule ? "Next" : "Mark Complete"}
        />
        {skippable ? (
          <SkipQuestion
            module={true}
            onPress={() => {
              navigation.dispatch(StackActions.replace("Skipped"));
              skipModule(uid);
            }}
          />
        ) : null}
      </ButtonSection>
    </SafeView>
  );
};
