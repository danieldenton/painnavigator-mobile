import React, { useContext, useEffect } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainTrackerComponent } from "../components/pain-tracker.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { isAndroid, timeZonedTodaysDate } from "../../../utils";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { setDailyPainStep, setDailyPainScores, painToday } = useContext(DailyPainContext)

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])

    const previousPage = () => {
        setDailyPainStep(0)
    }

    const screenName = isAndroid ? "DAILY SCORES" : "DAILY PAIN SCORES"

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    navigation={navigation}
                    destination={"Today"}
                    screen={screenName} 
                    previousPage={painToday === timeZonedTodaysDate ? previousPage : null}
                />
                {painToday === timeZonedTodaysDate ? <PainTrackerComponent navigation={navigation}/> : <DailyPainScoreComponent />}
            </SafeView>
        </Provider>
    );
};