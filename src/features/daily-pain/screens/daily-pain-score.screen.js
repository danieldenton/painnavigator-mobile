import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-native-paper";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainTrackerComponent } from "../components/pain-tracker.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { isAndroid } from "../../../utils";

export const DailyPainScoreScreen = ({ navigation }) => {
  const { dailyPainStep, setDailyPainStep, loadDailyPainScores, isLoading } =
    useContext(DailyPainContext);
  const { uid } = useContext(AuthenticationContext);

  useEffect(() => {
    loadDailyPainScores(uid);
  }, []);

  const previousPage = () => {
    setDailyPainStep(0);
  };

  const screenName = isAndroid ? "DAILY SCORES" : "DAILY PAIN SCORES";

  const pages = [
    <DailyPainScoreComponent />,
    <PainTrackerComponent navigation={navigation} />,
  ];

  return (
    <Provider>
      <SafeView>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#37b29d"
            style={{ flex: 1, justifyContent: "center" }}
          />
        ) : (
          <>
            <NavigationBarLeft
              navigation={navigation}
              destination={"Today"}
              screen={screenName}
              previousPage={dailyPainStep === 1 ? previousPage : null}
            />
            {pages[dailyPainStep]}
          </>
        )}
      </SafeView>
    </Provider>
  );
};
