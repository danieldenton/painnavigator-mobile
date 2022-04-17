import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Modal as PaperModal, Portal, Text } from 'react-native-paper';
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
    font-size: 18px;
`;

const ButtonContainer = styled.View`
    margin-bottom: 45px;
`;

export const ExitModal = ({ visible, setVisible, navigation, destination, resetJournal, changes }) => {
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};
    const hideModal = () => setVisible(false);

    return(
        <Portal>
            <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
                <ExitButtonRow>
                    <ExitButtonContainer onPress={() => setVisible(false)}>
                        <AntDesign name="close" size={24} color="black" />  
                    </ExitButtonContainer>
                </ExitButtonRow>
                <ExitModalTextContainer>
                    <ExitModalText>Are you sure you want to exit?</ExitModalText>
                    <ExitModalText>{changes ? "Your changes" : "This journal"} won't be saved.</ExitModalText>
                </ExitModalTextContainer>
                <ButtonContainer>
                    <JournalButtonOutline 
                        onPress={() => {
                            navigation.navigate(destination); 
                            {resetJournal && resetJournal();} 
                        }}
                        title={"Yes, Exit"}
                        fontSize={16}
                    />
                    <JournalButton title={"No, Keep Going"} onPress={hideModal} fontSize={16} />
                </ButtonContainer>
            </Modal>
        </Portal>
    );
};