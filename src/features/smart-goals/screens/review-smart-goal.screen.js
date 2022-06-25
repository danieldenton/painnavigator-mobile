import React, { useEffect, useState, useContext, useCallback, useRef, useMemo } from "react";
import { BottomSheetBackground } from "../../../components/bottom-sheet/background.component";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from 'react-native-paper';
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewJournalModal } from "../../../components/review-journal-modal.component";
import { ReviewSmartGoal } from "../components/review-smart-goal.component";
import { SafeView } from "../../../components/safe-area.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { StackActions } from '@react-navigation/native';
import add from "date-fns/add";
import format from 'date-fns/format';

export const ReviewSmartGoalScreen = ({ navigation }) => {
    const { activeGoal, cancelEdits, changes, deleteGoal, finishGoal } = useContext(SmartGoalContext);
    const { date_time_value } = activeGoal;
    const [editing, setEditing] = useState(false);
    const [showExitModal, setShowExitModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const reviewSmartGoalOptions = useRef(null);

    useEffect(() => {
        const end = add(new Date(date_time_value), {weeks: 4});
        const formattedEndDate = format(end, 'MM/dd/yyyy');
        const today = format(new Date(), 'MM/dd/yyyy');

        if(today === formattedEndDate) {
            setTimeout(() => {
                navigation.dispatch(StackActions.replace("SmartGoalCompleted"));
                finishGoal()
            }, 3000);
        };
    }, []);

    const closeModal = () => {
        reviewSmartGoalOptions.current?.close();
    };

    const editGoal = () => {
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

    const requestDelete = () => {
        closeModal();
        setShowDeleteModal(true);
    };

    const showModal = useCallback(() => {
        reviewSmartGoalOptions.current?.present();
    }, []);

    const snapPoints = useMemo(() => ['35%'], []);

    return (
        <Provider>
            <BottomSheetModalProvider>
                <SafeView>
                    <ReviewJournalNavigationBar 
                        changes={changes}
                        destination={"SmartGoalHome"}
                        headerName={"SMART GOAL"} 
                        navigation={navigation}
                        setVisible={setShowExitModal}
                        showBottomMenu={showModal}
                        resetJournal={cancelEdits}
                    />
                    <ReviewSmartGoal 
                        editing={editing} 
                        goal={activeGoal} 
                        navigation={navigation} 
                        setEditing={setEditing} 
                    />
                    <BottomSheetModal
                        backgroundComponent={props => <BottomSheetBackground {...props} />}
                        enablePanDownToClose={false}
                        handleComponent={null}
                        ref={reviewSmartGoalOptions}
                        snapPoints={snapPoints}
                        backdropComponent={renderBackdrop}
                        index={0}
                    >
                        <ReviewJournalModal 
                            closeModal={closeModal}
                            destination={"SmartGoalHome"}
                            editJournal={editGoal}
                            requestDelete={requestDelete} 
                            navigation={navigation}
                        />
                    </BottomSheetModal>
                </SafeView>
            </BottomSheetModalProvider>
            <ExitModal 
                destination={"SmartGoalDeleted"}
                deleteJournal={deleteGoal}
                navigation={navigation} 
                setVisible={setShowDeleteModal}
                visible={showDeleteModal}
                type={"goal"}
            />
            <ExitModal 
                changes={changes}
                destination={"SmartGoalHome"}
                navigation={navigation} 
                setVisible={setShowExitModal}
                visible={showExitModal}
                resetJournal={cancelEdits}
            />
        </Provider>
    );
};