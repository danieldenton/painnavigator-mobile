import React, { useContext } from "react";
import { View, Text, Modal } from "react-native";
import { ModuleButton } from "../../../components/button.component";
import { tourObj } from "../../dashboard-tour/data/dashboard-tour-data";
import { DashboardTourComponentOnTop } from "../../dashboard-tour/dashboard-tour-comp-top";
import { styles } from "../../dashboard-tour/dashboard-styles";
import { WellnessCoachContext } from "../../../services/wellness/wellness-coach.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { patchUser } from "../../../services/authentication/authentication.service";

export const WellnessCoachReminder = ({ navigation }) => {
  const { wellnessCoachReminded, setWellnessCoachReminded } =
    useContext(WellnessCoachContext);
  const { uid } = useContext(AuthenticationContext);

  const handleWellnessCoachReminder = () => {
    patchUser(uid, { wellness_coach_reminded: true });
    setWellnessCoachReminded(true);
    navigation.navigate("WellnessCoach");
  };

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!wellnessCoachReminded}
        >
          <View style={styles.modalBackground}>
            <DashboardTourComponentOnTop tour={4} />
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[4].tourTextBubble },
              ]}
            >
              <View style={styles.triangleRightTop} />
              <Text style={styles.modalContent}>
                Ready to meet with your personal Wellness Coach? Click here.
                Collaborating with your coach is one of the keys to achieving
                your goals - your coach is a real person, there to answer
                questions, support you, and help you overcome obstacles in your
                pain and your life.
              </Text>
              <ModuleButton
                onPress={() => handleWellnessCoachReminder()}
                title={"MEET YOUR COACH"}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
