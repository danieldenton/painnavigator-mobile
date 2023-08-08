import React, { useContext } from "react";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Modal as PaperModal, Portal } from 'react-native-paper';
import { JournalButton, JournalButtonOutline } from "../../../components/button.component";

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

export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const tourText = [
        "Welcome to PainNavigator! Here's a quick tutorial to get you started.", 
        "To get the most out of the program, we recommend you log your pain score daily here.",
        "Learn more about your pain and how to best manage it through the daily education videos here. Tap the first one to play the video!",
        "Move daily or as often as you can! Daily recommended exercises are here.",
        "You can chat with your wellness coach here! This is a great place to ask any questions.",
        "Any other activities will be updated automatically on the homepage. Just tap one to begin.",
        "You can explore other features, update settings, and view your course progress in the menu."
    ]

    return(
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <DashboardTourTextContainer>
                    <DashboardTourText>{tourText[tour]}</DashboardTourText>
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