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
import * as ScreenOrientation from "expo-screen-orientation";
import { registerForPushNotificationsAsync } from "../../../expoPushNotificationRegister";

export const OnboardScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { setError, error } = useContext(OnboardContext);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  const onPageScroll = (event) => {
    const { position } = event.nativeEvent;
    if (position !== currentPage) {
      setCurrentPage(position);
    }
  };

  const handleOldErrors = () => {
    if (error) {
      setError(null);
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
            registerForPushNotificationsAsync();
            handleOldErrors();
          }}
        />
        <SkipQuestionButton
          onPress={() => {
            navigation.navigate("Login");
            handleOldErrors();
          }}
        >
          <SkipQuestionText>LOGIN</SkipQuestionText>
        </SkipQuestionButton>
      </ButtonSection>
    </SafeView>
  );
};
