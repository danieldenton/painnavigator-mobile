import React, { useContext } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
// import { Modal as PaperModal, Portal } from 'react-native-paper';
import { JournalButton, JournalButtonOutline } from "../../../components/button.component";


export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)
    const containerStyle = {backgroundColor: 'white', padding: 20, borderRadius: 15};

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const handleFinish = () => {
        setTour(null)
        hideModal()
    }

    const tourObj = [
        { 
            text: "Welcome to PainNavigator! Here's a quick tutorial to get you started.", 
            style: styles.modalPlacement1
        }, 
        { 
            text: "To get the most out of the program, we recommend you log your pain score daily here.",
            style: styles.modalPlacement2
        },
        { 
            text: "Learn more about your pain and how to best manage it through the daily education videos here. Tap the first one to play the video!",
            style: styles.modalPlacement3
        },
        { 
            text: "Move daily or as often as you can! Daily recommended exercises are here.",
            style: styles.modalPlacement4 
        },
        { 
            text: "You can chat with your wellness coach here! This is a great place to ask any questions.",
            style: styles.modalPlacement5
         },
        { 
            text: "Any other activities will be updated automatically on the homepage. Just tap one to begin.",
            style: styles.modalPlacement6
        },
        { 
            text: "You can explore other features, update settings, and view your course progress in the menu.",
            style: styles.modalPlacement7
        }
    ]

    return(
        <>
        <View style={styles.container}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setVisible(!visible);
            }}>
                <View style={[styles.modalContainer, tourObj[tour].style]}>
                    <Text>{tourObj[tour].text}</Text>
                    <View>
                        {tour === 0 ? null :
                        <Pressable
                            onPress={() => setTour(tour - 1)}>
                            <Text style={styles.modalContent}>Previous</Text>
                        </Pressable>}
                        {tour < 6 ?  
                        <Pressable
                        onPress={() => setTour(tour + 1)}>
                        <Text style={styles.modalContent}>Next</Text>
                        </Pressable> : 
                        <Pressable
                            onPress={() => setTour(tour + 1)}>
                            <Text style={styles.modalContent}>Finish</Text>
                        </Pressable>}
                    </View>
                </View>
                
            </Modal>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    modalPlacement1: {
        marginTop: 10
    },
    modalPlacement2: {
        marginTop: 20
    },
    modalPlacement3: {
        marginTop: 30
    },
    modalPlacement4: {
        marginTop: 40
    },
    modalPlacement5: {
        marginTop: 50
    },
    modalPlacement6: {
        marginTop: 60
    },
    modalPlacement7: {
        marginTop: 0
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