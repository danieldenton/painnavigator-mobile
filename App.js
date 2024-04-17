import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { LogBox } from "react-native";
import * as Sentry from "@sentry/react-native";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";

const BACKGROUND_NOTIFICATIONS = "BACKGROUND-NOTIFICATION-TASK";

TaskManager.defineTask(BACKGROUND_NOTIFICATIONS, ({ data, error }) => {
  if (error) {
    console.log(
      "An error occurred while handling background push notification:",
      error
    );
    return;
  }
  if (data) {
    console.log("Received background push notification:", data);
  }
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Sentry.init({
  dsn: "https://3df4c4ed269645928046dfb2ed589dab@o1307008.ingest.sentry.io/6551256",
  enableInExpoDevelopment: true,
  debug: true,
});

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "Unhandled promise rejection: Error: Seeking interrupted.",
  "Background remote notifications have not been configured. To enable it, add `remote-notification` to `UIBackgroundModes` in the application's Info.plist file.",
]);

import {
  useFonts as usePoppins,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

import {
  useFonts as useInter,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
} from "@expo-google-fonts/inter";

import { AuthenticationContextProvider } from "./src/services/authentication.context";
import { OnboardContextProvider } from "./src/services/onboard.context";
import { OutcomeContextProvider } from "./src/services/outcome.context";
import { DailyPainContextProvider } from "./src/services/daily-pain.context";
import { ProfileContextProvider } from "./src/services/profile/profile-context";
import { BookmarksContextProvider } from "./src/services/bookmarks/bookmarks.context";
import { EducationContextProvider } from "./src/services/education/education.context";
import { MovementContextProvider } from "./src/services/movement/movement.context";
import { PainJournalContextProvider } from "./src/services/pain-journal/pain-journal.context";
import { FavoriteActivitiesContextProvider } from "./src/services/favorite-activities/favorite-activities.context";
import { FoodJournalContextProvider } from "./src/services/food-journal.context";
import { MoodJournalContextProvider } from "./src/services/mood-journal.context";
import { SmartGoalContextProvider } from "./src/services/smart-goal/smart-goal.context";
import { WellnessCoachContextProvider } from "./src/services/wellness-coach.context";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import { registerForPushNotificationsAsync } from "./src/expoPushNotificationRegister";

Sentry.init({
  dsn: "https://3df4c4ed269645928046dfb2ed589dab@o1307008.ingest.sentry.io/6551256",
  enableInExpoDevelopment: true,
  debug: true,
});

const firebaseConfig = {
  apiKey: "AIzaSyCzgZ9b1f-a-wYoGeelMvZfbFvjs2amnL0",
  authDomain: "painnavigator-ccabd.firebaseapp.com",
  projectId: "painnavigator-ccabd",
  storageBucket: "painnavigator-ccabd.appspot.com",
  messagingSenderId: "479858520400",
  appId: "1:479858520400:web:aabfba6f7058a798d0fc55",
  measurementId: "G-5565KEDFC6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.registerTaskAsync(BACKGROUND_NOTIFICATIONS);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token))
      .catch((error) => setExpoPushToken(`${error}`));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [poppinsLoaded] = usePoppins({
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  const [interLoaded] = useInter({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!poppinsLoaded || !interLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProfileContextProvider>
          <EducationContextProvider>
            <MovementContextProvider>
              <OnboardContextProvider>
                <OutcomeContextProvider>
                  <WellnessCoachContextProvider>
                    <AuthenticationContextProvider
                      expoPushToken={expoPushToken}
                    >
                      <DailyPainContextProvider>
                        <BookmarksContextProvider>
                          <SmartGoalContextProvider>
                            <PainJournalContextProvider>
                              <FoodJournalContextProvider>
                                <MoodJournalContextProvider>
                                  <FavoriteActivitiesContextProvider>
                                    <Navigation />
                                  </FavoriteActivitiesContextProvider>
                                </MoodJournalContextProvider>
                              </FoodJournalContextProvider>
                            </PainJournalContextProvider>
                          </SmartGoalContextProvider>
                        </BookmarksContextProvider>
                      </DailyPainContextProvider>
                    </AuthenticationContextProvider>
                  </WellnessCoachContextProvider>
                </OutcomeContextProvider>
              </OnboardContextProvider>
            </MovementContextProvider>
          </EducationContextProvider>
        </ProfileContextProvider>
      </ThemeProvider>
    </>
  );
}
