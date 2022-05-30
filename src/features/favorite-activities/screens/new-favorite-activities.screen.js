import React, { useContext, useState } from "react";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NewFavoriteActivities } from "../components/new-favorite-activities.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";

export const NewFavoriteActivitiesScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const { currentPage, previousPage } = useContext(FavoriteActivitiesContext);

    return (
        <Provider>
            <SafeView>
                <NavigationBar 
                    currentPage={currentPage} 
                    headerName={"My Activities"} 
                    previousPage={previousPage}
                    setVisible={setVisible} 
                />
                <NewFavoriteActivities navigation={navigation} />
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    //resetJournal={resetMoodJournal}
                    setVisible={setVisible}
                    visible={visible} 
                />
            </SafeView>
        </Provider>
    )
}; 