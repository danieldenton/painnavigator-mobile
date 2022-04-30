import React from "react";
import styled from "styled-components/native";
import { Close } from "../../icons";
import { TouchableOpacity } from "react-native";
import { Modal as PaperModal, Portal } from 'react-native-paper';
import { JournalButton, JournalButtonOutline } from "../button.component";

const Modal = styled(PaperModal)`
    border-radius: 15px;
    margin: ${(props) => props.theme.space[3]};
`;

const ExitButtonRow = styled.View`
    align-items: flex-end;
`;

const ExitButtonContainer = styled(TouchableOpacity)`
`;

const ExitModalTextContainer = styled.View`
    align-items: center;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const ExitModalText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    line-height: 26px;
`;

const ButtonContainer = styled.View`
    margin-bottom: 45px;
`;

export const ExitModal = ({ visible, setVisible, navigation, destination, deleteJournal, resetJournal, changes, journalId }) => {
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};
    const hideModal = () => setVisible(false);

    return(
        <Portal>
            <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
                <ExitButtonRow>
                    <ExitButtonContainer onPress={() => setVisible(false)}>
                        <Close />  
                    </ExitButtonContainer>
                </ExitButtonRow>
                <ExitModalTextContainer>
                    <ExitModalText>Are you sure you want to {deleteJournal ? "delete" : "exit"}?</ExitModalText>
                    <ExitModalText>{changes ? "Your changes" : "This journal"} won't be saved.</ExitModalText>
                </ExitModalTextContainer>
                <ButtonContainer>
                    <JournalButtonOutline 
                        onPress={() => {
                            navigation.navigate(destination);
                            {deleteJournal && deleteJournal(journalId);} 
                            {resetJournal && resetJournal();} 
                        }}
                        title={deleteJournal ? "Yes, Delete" : "Yes, Exit"}
                        fontSize={16}
                    />
                    <JournalButton title={deleteJournal ? "No, Save Journal" : "No, Keep Going"} onPress={hideModal} fontSize={16} />
                </ButtonContainer>
            </Modal>
        </Portal>
    );
};