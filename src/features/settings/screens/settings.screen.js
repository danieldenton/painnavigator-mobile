import React, { useContext, useRef, useState } from "react";
import { BottomModal } from "../../../components/bottom-sheet/bottom-modal.component";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { EducationContext } from "../../../services/education/education.context";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileContext } from "../../../services/profile/profile-context";
import { ProfileData } from "../components/profile-data.component";
import { ProfileOptionsButtons } from "../components/profile-option-buttons.component";
import { Provider } from 'react-native-paper';
import { ReviewJournalButton } from "../../../components/button.component";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
    const { cancelEdits, changes, saveEdits, userInfo, profileComplete } = useContext(ProfileContext);
    const { educationProgress } = useContext(EducationContext);
    const [editing, setEditing] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    const settingsOptions = useRef(null);

    const closeModal = () => {
        settingsOptions.current?.close();
    };

    const editJournal = () => {
        closeModal();
        setEditing(true);
    };

    const showModal = () => {
        settingsOptions.current?.present();
    };

    return(
        <Provider>
            <BottomSheetModalProvider>
                <SafeView>
                    <ReviewJournalNavigationBar 
                        changes={changes}
                        destination={"Today"}
                        headerName={"SETTINGS"} 
                        navigation={navigation} 
                        setVisible={setShowExitModal}
                        showBottomMenu={showModal}
                        resetJournal={cancelEdits}
                    />
                    <KeyboardAwareScrollView style={{ marginRight: -16, paddingRight: 16 }}>
                        <ProfileData editing={editing} profile={userInfo} />
                        {!editing && 
                            <ProfileOptionsButtons 
                                navigation={navigation} 
                                profileComplete={profileComplete} 
                                educationProgress={educationProgress}
                            />
                        }
                    </KeyboardAwareScrollView>
                    {editing && <ReviewJournalButton navigation={navigation} saveEdits={saveEdits} setEditing={setEditing} type={"Profile"}/>}
                    <BottomModal 
                        closeModal={closeModal}
                        destination={"Today"}
                        editJournal={editJournal}
                        navigation={navigation}
                        ref={settingsOptions}
                    /> 
                </SafeView>
            </BottomSheetModalProvider>
            <ExitModal 
                changes={changes}
                destination={"Today"}
                navigation={navigation} 
                setVisible={setShowExitModal}
                visible={showExitModal}
                resetJournal={cancelEdits}
            />
        </Provider>
    );
};