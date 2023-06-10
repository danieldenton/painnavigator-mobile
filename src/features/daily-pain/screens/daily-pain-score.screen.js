import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { PainGraphComponent } from "../components/pain-graph.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { postDailyPainScore } from '../../../services/daily-pain/daily-pain.service';
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { user } = useContext(AuthenticationContext);
    const {dailyPainScore, setDailyPainScore, setDailyPainScores } = useContext(DailyPainContext)
    const [visible, setVisible] = useState(false);

    const pages = [<DailyPainScoreComponent />, <PainGraphComponent />]

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    // currentPage={} 
                    screen={"DAILY PAIN SCORE"} 
                    // previousPage={previousPage}
                    setVisible={setVisible} 
                />
                <DailyPainScoreComponent />
                <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => {(postDailyPainScore(user.useruid, dailyPainScore, setDailyPainScore),
                        navigation.navigate())}} 
                />
            </ButtonSection>   
            </SafeView>
        </Provider>
    );
};