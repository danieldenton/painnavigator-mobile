import React, { useContext } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DailyPainScore } from "../components/daily-activities.component";
import { EducationUnitCard } from "../../education/components/education-unit-card.component";
import { MovementUnitCard } from "../../movement/components/movement-unit-card.component";


export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)

    const handleFinish = () => {
        setTour(null)
        setVisible(false)
    }

    const tourObj = [
        { 
            text: "Welcome to PainNavigator! Here's a quick tutorial to get you started.", 
            tourTextBubble: 250,
            tourComponentPlacement: null,
            component: null
        }, 
        { 
            text: "To get the most out of the program, we recommend you log your pain score daily here.",
            tourTextBubble: 20,
            tourComponentPlacement: 230,
            component: <DailyPainScore />
        },
        { 
            text: "Learn more about your pain and how to best manage it through the daily education videos here. Tap the first one to play the video!",
            tourTextBubble: 20,
            tourComponentPlacement: 377, 
            component: <EducationUnitCard />
        },
        { 
            text: "Move daily or as often as you can! Daily recommended exercises are here.",
            tourTextBubble: 20,
            tourComponentPlacement: 0,
            component: <MovementUnitCard /> 
        },
        { 
            text: "You can chat with your wellness coach here! This is a great place to ask any questions.",
            tourTextBubble: 20,
            tourComponentPlacement: 0,
            component: <MovementUnitCard /> 
         },
        { 
            text: "Any other activities will be updated automatically on the homepage. Just tap one to begin.",
            tourTextBubble: 20,
            tourComponentPlacement: 0,
            component: <MovementUnitCard /> 
        },
        { 
            text: "You can explore other features, update settings, and view your course progress in the menu.",
            tourTextBubble: 20,
            tourComponentPlacement: 0,
            component: <MovementUnitCard /> 
        }
    ]

    const tourPlacement = [250, 20, 20]
    const bubblePlacement = [null, 230, 377]
    const tourComponents = [null, <DailyPainScore />, <EducationUnitCard />, <MovementUnitCard />]

    return(
        <>
        <View style={styles.container}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
            >  
               <View style={styles.modalBackground}>
               {tour !== 0 || tour !== 3 || tour !== 5  ? 
               <View style={[styles.bubble, {marginTop: tourObj[tour].tourComponentPlacement}]}>
                {tourObj[tour].component}
               </View> : null}
                    <View style={[styles.modalContainer, {marginTop: tourPlacement[tour]}]}>
                    {tour > 0  ? <View style={styles.triangle}/> : null}
                            <Text style={styles.modalContent}>{tourObj[tour]?.text}</Text>
                            <View style={styles.buttonContanier}>
                                {tour === 0 ? null :
                                <Pressable
                                    onPress={() => setTour(tour - 1)}>
                                    <Text style={styles.buttons}>PREVIOUS</Text>
                                </Pressable>}
                                {tour < 6 ?  
                                <Pressable
                                style={styles.buttons}
                                onPress={() => setTour(tour + 1)}>
                                <Text style={styles.buttons}>NEXT</Text>   
                                </Pressable> : 
                                <Pressable
                                style={styles.buttons}
                                    onPress={() => handleFinish()}>
                                    <Text style={styles.buttons}>FINISH</Text>
                                </Pressable>}
                            </View>
                    </View>
                </View>
            </Modal>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
      },
    modalContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
      },
    triangle: {
        position: 'absolute',
        top: -20,
        left: 30,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderBottomWidth: 20,
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
    },
    bubble: {
        position: 'relative',
        marginTop: 250, 
        marginLeft: 16,
        marginRight: 16
      },
    buttonContanier: {
        justifyContent: 'center',
        flexDirection: 'row', 
        width: 200,
    },
    buttons: {
        fontSize: 16,
        textAlign: 'center',
        width: 100,
        color: '#16a28b',
    },
    modalContent: {
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: 'white',
        padding: 20,
        elevation: 5
    }
  });