import React, { useContext } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)

    const handleFinish = () => {
        setTour(null)
        setVisible(false)
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
               >
                <View style={[styles.modalContainer, tourObj[tour]?.style]}>
                    <Text>{tourObj[tour]?.text}</Text>
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
                            onPress={() => handleFinish()}>
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
        marginTop: 20
    },
    modalPlacement2: {
        marginTop: 40
    },
    modalPlacement3: {
        marginTop: 60
    },
    modalPlacement4: {
        marginTop: 80
    },
    modalPlacement5: {
        marginTop: 100
    },
    modalPlacement6: {
        marginTop: 120
    },
    modalPlacement7: {
        marginTop: 140
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        minWidth: 300,
    }
  });