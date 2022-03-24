import React from "react";
import styled from "styled-components/native";

import { Modal as PaperModal, Portal, Text } from 'react-native-paper';
import { Button } from "../../../components/button.component";

const Modal = styled(PaperModal)`
    border-radius: 8px;
    margin: ${(props) => props.theme.space[3]};
`;

export const ExitModal = ({ visible, setVisible, navigation, resetJournal }) => {
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 10};

    return(
        <Portal>
            <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
                <Text>Are you sure you want to exit? This journal won't be saved.</Text>
                <Button 
                    onPress={() => { navigation.navigate("PainJournal"); resetJournal(); }}
                >
                    Yes, Exit
                </Button>
                <Button 
                    onPress={() => setVisible(false)}
                >
                    No, Keep Going
                </Button>
            </Modal>
        </Portal>
    );
};