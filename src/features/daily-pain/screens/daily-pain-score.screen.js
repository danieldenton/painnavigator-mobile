import React, { useContext, useEffect } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainTrackerComponent } from "../components/pain-tracker.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { dailyPainStep, setDailyPainStep, dailyPainScore, setDailyPainScore } = useContext(DailyPainContext)

    const previousPage = () => {
        setDailyPainStep(0)
    }

    const pages = [<DailyPainScoreComponent />, <PainTrackerComponent navigation={navigation}/>]

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    navigation={navigation}
                    destination={"Today"}
                    screen={"DAILY PAIN SCORES"} 
                    previousPage={dailyPainStep === 1 ? previousPage : null}
                />
                {pages[dailyPainStep]}
            </SafeView>
        </Provider>
    );
};