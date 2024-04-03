import React, { useState, useContext, useCallback, useRef } from "react";
import { BottomModal } from "../../../components/bottom-sheet/bottom-modal.component";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ExitModal } from "../../../components/journals/exit-modal.component";
import { Provider } from "react-native-paper";
import { ReviewJournalNavigationBar } from "../../../components/journals/navigation-bar.component";
import { ReviewSmartGoal } from "../components/review-smart-goal.component";
import { SafeView } from "../../../components/safe-area.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";

export const ReviewSmartGoalScreen = ({ navigation }) => {
  const { activeGoal, cancelEdits, changes, deleteGoal } =
    useContext(SmartGoalContext);
  const [editing, setEditing] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const reviewSmartGoalOptions = useRef(null);

  const closeModal = () => {
    reviewSmartGoalOptions.current?.close();
  };

  const editGoal = () => {
    closeModal();
    setEditing(true);
  };

  const requestDelete = () => {
    closeModal();
    setShowDeleteModal(true);
  };

  const showModal = useCallback(() => {
    reviewSmartGoalOptions.current?.present();
  }, []);

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
          {activeGoal && (
            <ReviewSmartGoal
              editing={editing}
              goal={activeGoal}
              navigation={navigation}
              setEditing={setEditing}
            />
          )}
          <BottomModal
            closeModal={closeModal}
            destination={"SmartGoalHome"}
            editJournal={editGoal}
            navigation={navigation}
            ref={reviewSmartGoalOptions}
            requestDelete={requestDelete}
          />
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
