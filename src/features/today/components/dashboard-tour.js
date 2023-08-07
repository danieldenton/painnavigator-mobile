import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Modal as PaperModal, Portal } from 'react-native-paper';
import { JournalButton, JournalButtonOutline } from "../button.component";

const Modal = styled(PaperModal)`
    border-radius: 15px;
    margin: ${(props) => props.theme.space[3]};
`;

const DashboardTourTextContainer = styled.View`
    align-items: center;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const DashboardTourText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    line-height: 26px;
`;

const ButtonContainer = styled.View`
    margin-bottom: 45px;
`;

export const DashboardTour = ({ tour, setTour }) => {
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};

    return(
        <Portal>
            <Modal visible={tour} onDismiss={() => setTour(null)} contentContainerStyle={containerStyle}>
                <DashboardTourTextContainer>
                    <DashboardTourText>hey bud</DashboardTourText>
                </DashboardTourTextContainer>
                <ButtonContainer>
                    <JournalButtonOutline 
                        onPress={() => {tour >= 6 ? setTour(null) : setTour(tour + 1)}}
                        title={tour < 6 ? "Next" : "Finish"}
                        fontSize={16}
                    />
                    {tour > 0 &&
                    <JournalButton 
                        title={"Previous"} 
                        onPress={() => setTour(tour - 1)} 
                        fontSize={16} 
                    />}
                </ButtonContainer>
            </Modal>
        </Portal>
    );
};