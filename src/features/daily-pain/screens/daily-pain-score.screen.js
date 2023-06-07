import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { DailyPainScoreComponent } from "../components/daily-pain-score.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
// import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const DailyPainScoreScreen = ({ navigation }) => {
    const { currentPage, previousPage, resetPainJournal } = useContext(AuthenticationContext);
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
            </SafeView>
        </Provider>
    );
};