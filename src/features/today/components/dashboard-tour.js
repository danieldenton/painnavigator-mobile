import React, { useContext } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  tourObj,
  shortTour,
  noWCoach,
  noWCShortTour,
} from "../data/dashboard-tour-data";
import  { DashboardTourComponentOnTop } from "./dashboard-tour-comp-top"
import { DashboardTourComponentOnBottom } from "./dashboard-tour-comp-bottom"
import { styles } from "./dashboard-styles";

export const DashboardTour = ({ visible, setVisible }) => {
  const { tour, setTour, educationProgram, accessToWellnessCoach } = useContext(
    AuthenticationContext
  );
  
  const customTour =
    educationProgram !== 10
      ? accessToWellnessCoach
        ? tour
        : noWCoach[tour]
      : accessToWellnessCoach
      ? shortTour[tour]
      : noWCShortTour[tour];

      console.log(customTour, accessToWellnessCoach)

  const handleFinish = () => {
    setTour(null);
    setVisible(false);
  };
  
  return (
    <>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <View style={styles.modalBackground}>
            {customTour !== 0 &&
            customTour !== 2 &&
            customTour !== 3 &&
            customTour !== 5
              ? <DashboardTourComponentOnTop customTour={customTour} tour={tour} />
              : null}
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[customTour]?.tourTextBubble },
              ]}
            >
              {customTour > 0 ? (
                <View
                  style={[
                    customTour === 4
                      ? styles.triangleRightTop
                      : styles.triangle,
                    customTour !== 2 && customTour !== 3 && customTour !== 5
                      ? styles.topLeft
                      : styles.bottom,
                  ]}
                />
              ) : null}
              <Text style={styles.modalContent}>
                {customTour !== 6
                  ? tourObj[customTour]?.text
                  : "You can explore other features and update settings in the menu."}
              </Text>
              <View style={styles.buttonsContanier}>
                {tour === 0 ? null : (
                  <Pressable onPress={() => setTour(tour - 1)}>
                    <View style={styles.previousButtonContainer}>
                      <Text style={styles.previousButtons}>PREVIOUS</Text>
                    </View>
                  </Pressable>
                )}
                {customTour < 6 ? (
                  <Pressable
                    style={styles.buttons}
                    onPress={() => setTour(tour + 1)}
                  >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttons}>NEXT</Text>
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    style={styles.buttons}
                    onPress={() => handleFinish()}
                  >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttons}>FINISH</Text>
                    </View>
                  </Pressable>
                )}
              </View>
            </View>
            {customTour === 2 || customTour === 3 || customTour === 5
              ? <DashboardTourComponentOnBottom customTour={customTour} />
              : null}
          </View>
        </Modal>
      </View>
    </>
  );
};
