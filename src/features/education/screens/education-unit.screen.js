import React, { useContext, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { track } from "@amplitude/analytics-react-native";
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

import { EDUCATION_UNIT_EVENTS } from "../../../amplitude-events";

export const EducationUnitScreen = ({ navigation }) => {
  const {
    completeModule,
    currentModule,
    skipModule,
    educationIntroStep,
    setEducationIntroStep,
  } = useContext(EducationContext);
  const { setIsMovement } = useContext(MovementContext);
  const { uid } = useContext(AuthenticationContext)
  const { post_video_destination, type, skippable, id } = currentModule;

  const trackEvent = EDUCATION_UNIT_EVENTS.BOOKMARK_EDUCATION_UNIT;
  const trackNavBarEvent = EDUCATION_UNIT_EVENTS.BACK_TO_DASHBOARD;

  useEffect(() => {
    setIsMovement(false);
  }, []);

  const postVideoAction = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    track(EDUCATION_UNIT_EVENTS.COMPLETE_EDUCATION_UNIT);
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

  const educationUnitTypeCheckForRender = () => {
    if (type === "video") {
      return <VideoUnit />;
    } else if (type === "audio") {
      return <AudioUnit unit={currentModule} />;
    } else if (type === "text") {
      return <TextUnit />;
    } else {
      return <PNIntroUnit />;
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
          trackNavBarEvent={trackNavBarEvent}
        />
      ) : (
        <TextModuleNavBar
          screen={"Education"}
          destination={"Today"}
          navigation={navigation}
          id={id}
          trackEvent={trackEvent}
          trackNavBarEvent={trackNavBarEvent}
        />
      )}
      {educationUnitTypeCheckForRender()}
      <ButtonSection>
        <ModuleButton
          onPress={() => {
            {
              id === 1 && educationIntroStep < 4
                ? setEducationIntroStep(
                    (educationIntroStep) => educationIntroStep + 1
                  )
                : postVideoAction();
            }
          }}
          title={id === 1 && educationIntroStep < 4 ? "Next" : "Mark Complete"}
        />
        {skippable ? (
          <SkipQuestion
            module={true}
            onPress={() => {
              track(EDUCATION_UNIT_EVENTS.SKIP_EDUCATION_UNIT);
              navigation.dispatch(StackActions.replace("Skipped"));
              skipModule();
            }}
          />
        ) : null}
      </ButtonSection>
    </SafeView>
  );
};