import React, { useState, useContext } from "react";
import { Provider } from 'react-native-paper';
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBar } from "../../../components/journals/navigation-bar.component";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { NewProfile } from "../components/new-profile.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { PROFILE_EVENTS } from "../../../amplitude-events";

export const NewProfileScreen = ({ navigation }) => {
    const { profileStep, previousProfileStep, resetProfileStep } = useContext(ProfileContext);
    const [visible, setVisible] = useState(false);

    return(
        <Provider>
            <SafeView>
                <NavigationBar 
                    currentPage={profileStep} 
                    headerName={"SET UP PROFILE"} 
                    previousPage={previousProfileStep}
                    setVisible={setVisible} 
                />
                <NewProfile navigation={navigation} />
                <ExitModal 
                    destination={"Today"}
                    navigation={navigation} 
                    resetJournal={resetProfileStep}
                    type={"Profile"}
                    setVisible={setVisible}
                    visible={visible} 
                    trackExitEvent={PROFILE_EVENTS.EXIT_PROFILE_SET_UP}
                />
            </SafeView>
        </Provider>
    );
};