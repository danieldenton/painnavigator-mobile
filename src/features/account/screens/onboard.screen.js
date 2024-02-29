import React, { useState, useContext, useEffect } from "react";
import { OnboardContext } from "../../../services/onboard.context";
import { SafeView } from "../../../components/safe-area.component";
import { OnboardSwiper } from "../components/onboard-swiper.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import {
  SkipQuestionButton,
  SkipQuestionText,
} from "../../../components/skip-question.component";
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from "../../../amplitude-events";
import * as ScreenOrientation from "expo-screen-orientation";

export const OnboardScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { setError } = useContext(OnboardContext);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  const onPageScroll = (event) => {
    const { position } = event.nativeEvent;
    if (position !== currentPage) {
      setCurrentPage(position);
    }
  };

  return (
    <SafeView>
      <OnboardSwiper onPageScroll={onPageScroll} />
      <ButtonSection>
        <JournalButton
          title={"Sign Up"}
          onPress={() => {
            navigation.navigate("Provider");
            track(ONBOARD_EVENTS.CHOSE_SIGN_UP);
            setError(null);
          }}
        />
        <SkipQuestionButton
          onPress={() => {
            navigation.navigate("Login");
            track(ONBOARD_EVENTS.CHOSE_LOGIN);
            setError(null);
          }}
        >
          <SkipQuestionText>LOGIN</SkipQuestionText>
        </SkipQuestionButton>
      </ButtonSection>
    </SafeView>
  );
};
