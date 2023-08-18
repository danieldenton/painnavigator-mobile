import React, { useContext } from "react";
import { View, Text, Modal, Pressable } from 'react-native'
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { tourObj, shortTour } from "../data/dashboard-tour-data";
import { styles } from "./dashboard-styles";


export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour, educationProgram } = useContext(AuthenticationContext)

    const customTour = educationProgram !== 10 ? tour : shortTour[tour]

    const handleFinish = () => {
        setTour(null)
        setVisible(false)
    }

    const componentOnTop = () => {
        return (
            customTour < 4 || tour === 5 ?
            <View style={[styles.bubble, {marginTop: tourObj[customTour]?.tourComponentPlacement}]}>
                {tourObj[customTour]?.component}
            </View> 
            :
            customTour === 4 ?
            <View style={styles.messageContainer}>
                <View style={[styles.bubble, {marginTop: tourObj[customTour].tourComponentPlacement}]}>
                    {tourObj[customTour].component}
                </View> 
            </View>
            :
            <View style={styles.menuContainer}>
                <View style={[styles.bubble, {marginTop: tourObj[customTour]?.tourComponentPlacement}]}>
                    {tourObj[customTour]?.component}
                </View> 
            </View>
        )
    }

    const componentOnBottom = () => {
        return (
            <View style={[styles.bubble, {marginTop: tourObj[customTour].tourComponentPlacement}]}>
                {tourObj[customTour].component}
            </View> 
        )
    }
    
    return(
        <>
        <View style={styles.container}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={visible}
            >  
                <View style={styles.modalBackground}>
                    {customTour !== 0 && customTour !== 2 && customTour !== 3 && customTour !== 5  ? componentOnTop() : null}
                        <View style={[styles.modalContainer, {marginTop: tourObj[customTour]?.tourTextBubble}]}>
                            {customTour > 0  ? 
                            <View style={[
                                customTour === 4 ? styles.triangleRightTop : 
                                styles.triangle, customTour !== 2 && customTour !== 3 && customTour !==5 ? styles.topLeft : styles.bottom]}/> 
                            : null}
                            <Text style={styles.modalContent}>{customTour !==6 ? tourObj[customTour]?.text : "You can explore other features and update settings in the menu."}</Text>
                            <View style={styles.buttonsContanier}>
                                {tour === 0 ? null :
                                <Pressable
                                    onPress={() => setTour(tour - 1)}>
                                        <View style={styles.previousButtonContainer}>
                                             <Text style={styles.previousButtons}>PREVIOUS</Text>
                                        </View>
                                </Pressable>}
                                {customTour < 6 ?  
                                <Pressable
                                    style={styles.buttons}
                                    onPress={() => setTour(tour + 1)}>
                                        <View style={styles.buttonContainer}>
                                            <Text style={styles.buttons}>NEXT</Text>
                                        </View>
                                </Pressable> : 
                                <Pressable
                                    style={styles.buttons}
                                    onPress={() => handleFinish()}>
                                        <View style={styles.buttonContainer}>
                                             <Text style={styles.buttons}>FINISH</Text>
                                        </View>
                                </Pressable>}
                            </View>
                        </View>
                    {customTour === 2 || customTour === 3 || customTour === 5 ? componentOnBottom() : null}
                </View>
            </Modal>
        </View>
        </>
    );
}

