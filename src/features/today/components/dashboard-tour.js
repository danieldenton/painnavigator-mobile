import React, { useContext } from "react";
import { View, Text, StyleSheet, Modal } from 'react-native'
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
// import { Modal as PaperModal, Portal } from 'react-native-paper';
import { JournalButton, JournalButtonOutline } from "../../../components/button.component";

// const maybeModal = styled(Modal)`
//     border-radius: 15px;
//     margin: ${(props) => props.theme.space[3]};
// `;

// const DashboardTourTextContainer = styled.View`
//     align-items: center;
//     margin-top: 24px;
//     margin-bottom: 24px;
// `;

// const DashboardTourText = styled.Text`
//     font-family: Inter_500Medium;
//     font-size: 18px;
//     line-height: 26px;
// `;

// const ButtonContainer = styled.View`
//     margin-bottom: 45px;
// `;

export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const handleFinish = () => {
        setTour(null)
        hideModal()
    }

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
        // <Portal>
        <View style={styles.container}>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setVisible(!visible);
            }}>
                <View>
                    <Text>{tourText[tour]}</Text>
                </View>
                {/* <ButtonContainer>
                    <JournalButtonOutline 
                        onPress={() => {tour >= 6 ? handleFinish() : setTour(tour + 1)}}
                        title={tour < 6 ? "Next" : "Finish"}
                        fontSize={16}
                    />
                    {tour > 0 &&
                    <JournalButton 
                        title={"Previous"} 
                        onPress={() => setTour(tour - 1)} 
                        fontSize={16} 
                    />}
                </ButtonContainer> */}
            </Modal>
            {/* <Modal visible={visible} style={styles.modalContainer}> */}
                {/* <View style={[styles.modalContent, styles.modalContainer2]}>
                    <DashboardTourText>{tourText[tour]}</DashboardTourText>
                </View>
                <ButtonContainer>
                    <JournalButtonOutline 
                        onPress={() => {tour >= 6 ? handleFinish() : setTour(tour + 1)}}
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
            </Modal> */}
            </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay color
      },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        minWidth: 300,
    },
    modalContainer1: {
        marginTop: '40%', // Adjust the marginTop to vertically position the modal
    },
    modalContainer2: {
    marginTop: '70%', // Adjust the marginTop to vertically position the modal
    },
  });