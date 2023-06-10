import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { postDailyPainScore } from '../../../services/daily-pain/daily-pain.service';
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { currentPage, previousPage, resetPainJournal } = useContext(AuthenticationContext);
    const {dailyPainScore, setDailyPainScore, setDailyPainScores } = useContext(DailyPainContext)
    const [visible, setVisible] = useState(false);

    return(
        <Provider>
            <SafeView>
                <NavigationBarLeft 
                    currentPage={currentPage} 
                    screen={"DAILY PAIN SCORE"} 
                    previousPage={previousPage}
                    setVisible={setVisible} 
                />
                <DailyPainScoreComponent navigation={navigation} />
                <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => {(postDailyPainScore(uid, dailyPainScore, setDailyPainScore, setDailyPainScores),
                        navigation.navigate())}} 
                />
            </ButtonSection>   
            </SafeView>
        </Provider>
    );
};