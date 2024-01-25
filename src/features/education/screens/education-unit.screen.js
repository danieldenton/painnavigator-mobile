import React, { useContext, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { track } from "@amplitude/analytics-react-native";
import { EducationContext } from "../../../services/education/education.context";
import { MovementContext } from "../../../services/movement/movement.context";
import { AudioUnit } from "../components/audio-unit.component";
import { VideoUnit } from "../components/video-unit.component";
import { TextUnit } from "../components/text-unit.component";
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
  const { completeModule, currentModule, skipModule, setEducationInroStep } =
    useContext(EducationContext);
  const { setIsMovement } = useContext(MovementContext);
  const { post_video_destination, type, skippable, id } = currentModule;

  const trackEvent = EDUCATION_UNIT_EVENTS.BOOKMARK_EDUCATION_UNIT;
  const trackNavBarEvent = EDUCATION_UNIT_EVENTS.BACK_TO_DASHBOARD;

  useEffect(() => {
    setIsMovement(false);
  }, []);

  const postVideoAction = () => {
    const PAIN_JOURNAL_HOME = post_video_destination === "PainJournalHome";
    navigation.dispatch(
      StackActions.replace(PAIN_JOURNAL_HOME ? post_video_destination : "Why", {
        post_video_destination: post_video_destination,
      })
    );
  };

  const educationUnitTypeCheckForRender = () => {
    if (type === "video") {
      return (
        <>
          <NavigationBarLeft
            screen={"Education"}
            destination={"Today"}
            navigation={navigation}
            orientation={true}
            trackNavBarEvent={trackNavBarEvent}
          />
          <VideoUnit />
        </>
      );
    } else if (type === "audio") {
      return (
        <>
          <TextModuleNavBar
            screen={"Education"}
            destination={"Today"}
            navigation={navigation}
            id={id}
            trackEvent={trackEvent}
            trackNavBarEvent={trackNavBarEvent}
          />
          <AudioUnit unit={currentModule} />
        </>
      );
    } else if (type === "text") {
      <>
        <TextModuleNavBar
          screen={"Education"}
          destination={"Today"}
          navigation={navigation}
          id={id}
          trackEvent={trackEvent}
          trackNavBarEvent={trackNavBarEvent}
        />
        <TextUnit />
      </>;
    }
  };

  return (
    <SafeView>
      {educationUnitTypeCheckForRender()}
      <ButtonSection>
        <ModuleButton
          onPress={() => {
            {
              type === "video"
                ? ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                  )
                : null;
            }
            {
              post_video_destination
                ? postVideoAction()
                : navigation.dispatch(StackActions.replace("Completion"));
            }
            track(EDUCATION_UNIT_EVENTS.COMPLETE_EDUCATION_UNIT);
            completeModule();
          }}
          title={"Mark Complete"}
        />
        {skippable && (
          <SkipQuestion
            module={true}
            onPress={() => {
              track(EDUCATION_UNIT_EVENTS.SKIP_EDUCATION_UNIT);
              navigation.dispatch(StackActions.replace("Skipped"));
              skipModule();
            }}
          />
        )}
      </ButtonSection>
    </SafeView>
  );
};
