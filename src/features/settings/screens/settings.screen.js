import React, { useCallback, useContext, useMemo, useRef, useState } from "react";
import { BottomSheetBackground } from "../../../components/bottom-sheet/background.component";
import { 
    BottomSheetBackdrop, 
    BottomSheetModal, 
    BottomSheetModalProvider 
} from '@gorhom/bottom-sheet';
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { JournalButton } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";
import { Provider } from 'react-native-paper';
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ProfileData } from "../components/profile-data.component";
import { ProfileOptionsButtons } from "../components/profile-option-buttons.component";
import { SafeView } from "../../../components/safe-area.component";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { EducationContext } from "../../../services/education/education.context";

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

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
    ),[]);

    const snapPoints = useMemo(() => ['35%'], []);

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
                    {editing && 
                        <ButtonSection>
                            <JournalButton 
                                title={"Save Changes"}
                                onPress={() => {
                                    saveEdits(); 
                                    setTimeout(() => {setEditing(false)}, 1000);
                                    navigation.navigate("JournalUpdated", { type: "Profile" })
                                }}
                            />
                        </ButtonSection>
                    }
                    <BottomSheetModal
                        backdropComponent={renderBackdrop}
                        backgroundComponent={props => <BottomSheetBackground {...props} />}
                        enablePanDownToClose={false}
                        handleComponent={null}
                        index={0}
                        ref={settingsOptions}
                        snapPoints={snapPoints}
                    >
                        <ReviewJournalModal 
                            closeModal={closeModal}
                            destination={"Today"}
                            editJournal={editJournal} 
                            navigation={navigation}
                        />
                    </BottomSheetModal>
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