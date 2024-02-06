import React from "react";
import { View, Text, Modal } from "react-native";
import { ModuleButton } from "../../../components/button.component";
import { tourObj } from "../../dashboard-tour/data/dashboard-tour-data";
import { DashboardTourComponentOnTop } from "../../dashboard-tour/dashboard-tour-comp-top";
import { styles } from "../../dashboard-tour/dashboard-styles";

export const WellnessCoachReminder = ({ visible, setVisible, navigation }) => {

  const handleFinish = () => {
    setTour(null);
    setVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <View style={styles.modalBackground}>
              <DashboardTourComponentOnTop />
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[4].tourTextBubble },
              ]}
            >
                <View
                  style={styles.triangleRightTop}
                />
              <Text style={styles.modalContent}>{tourObj[customTour]?.text}</Text>
              <ModuleButton
                onPress={() => navigation.navigate("WellnessCoach")}
                title={"CHECK IN WITH YOUR COACH"}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
