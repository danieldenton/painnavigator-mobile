import React, { useState, useContext, useEffect } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainTrackerComponent } from "../components/pain-graph.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const { dailyPainScore, setDailyPainScore, todaysPain, setTodaysPain } = useContext(DailyPainContext)

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    // currentPage={} 
                    screen={"DAILY PAIN SCORE"} 
                    // previousPage={previousPage}
                />
                {todaysPain ? <PainTrackerComponent navigation={navigation}/> : <DailyPainScoreComponent />} 
            </SafeView>
        </Provider>
    );
};