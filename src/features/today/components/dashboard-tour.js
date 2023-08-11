import React, { useContext } from "react";
import { View, Text, Modal, Pressable } from 'react-native'
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { tourObj } from "../data/dashboard-tour-data";
import { styles } from "./dashboard-styles";


export const DashboardTour = ({ visible, setVisible }) => {
    const { tour, setTour } = useContext(AuthenticationContext)

    const handleFinish = () => {
        setTour(null)
        setVisible(false)
    }

    const componentOnTop = () => {
        return (
            tour < 4 || tour > 5 ?
            <View style={[styles.bubble, {marginTop: tourObj[tour]?.tourComponentPlacement}]}>
                {tourObj[tour]?.component}
            </View> 
            :
            <View style={styles.topCompContainer}>
                <View style={[styles.bubble, {marginTop: tourObj[tour].tourComponentPlacement}]}>
                    {tourObj[tour].component}
                </View> 
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
                    {tour !== 0 && tour !== 3 && tour !== 5  ? 
                    componentOnTop() : null}
                        <View style={[styles.modalContainer, {marginTop: tourObj[tour]?.tourTextBubble}]}>
                            {tour > 0  ? 
                            <View style={[
                                tour === 4 ? styles.triangleRightTop : 
                                styles.triangle, tour !== 3 && tour !==5 ? styles.topLeft : styles.bottom]}/> 
                            : null}
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
                    {tour === 3 || tour === 5 ? 
                    <View style={[styles.bubble, {marginTop: tourObj[tour].tourComponentPlacement}]}>
                        {tourObj[tour].component}
                    </View> : null}
                </View>
            </Modal>
        </View>
        </>
    );
}

