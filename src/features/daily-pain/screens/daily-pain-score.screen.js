import React, { useContext, useEffect } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainTrackerComponent } from "../components/pain-tracker.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { isAndroid } from "../../../utils";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { dailyPainStep, setDailyPainStep } = useContext(DailyPainContext)

    const previousPage = () => {
        setDailyPainStep(0)
    }

    const screenName = isAndroid ? "DAILY SCORES" : "DAILY PAIN SCORES"

    const pages = [<DailyPainScoreComponent />, <PainTrackerComponent navigation={navigation}/>]

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    navigation={navigation}
                    destination={"Today"}
                    screen={screenName} 
                    previousPage={dailyPainStep === 1 ? previousPage : null}
                />
                {pages[dailyPainStep]}
            </SafeView>
        </Provider>
    );
};