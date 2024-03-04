import React, { useContext, useState } from "react";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SafeView } from "../../../components/safe-area.component";
import { NewSmartGoal } from "../components/new-smart-goal.component";

export const NewSmartGoalScreen = ({ navigation }) => {
    const { currentPage, resetSmartGoal, previousPage} = useContext(SmartGoalContext);
    const [exitModalVisible, setExitModalVisible] = useState(false);

    return (
        <Provider>
            <SafeView>
                <NavigationBar 
                    currentPage={currentPage} 
                    headerName={"Smart Goal"} 
                    previousPage={previousPage}
                    setVisible={setExitModalVisible} 
                />
                <NewSmartGoal navigation={navigation} />
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetSmartGoal}
                    setVisible={setExitModalVisible}
                    visible={exitModalVisible}
                    type={"goal"} 
                />
            </SafeView>
        </Provider>
    );
};  