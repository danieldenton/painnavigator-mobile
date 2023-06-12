import React, { useContext, useEffect } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { dailyPainScore, setDailyPainScore, todaysPain, setTodaysPain } = useContext(DailyPainContext)

    useEffect(() => {
        if (dailyPainScore.id !== null) {
            // Navigate to PainTrackerScreen if dailyPainScore.id is not null
            navigation.navigate('PainTrackerScreen');
        }
    }, [dailyPainScore]);

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    // currentPage={} 
                    screen={"DAILY PAIN SCORE"} 
                    // previousPage={previousPage}
                />
                <DailyPainScoreComponent naviagtion={navigation}/>
            </SafeView>
        </Provider>
    );
};