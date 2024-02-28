import React, { useContext, useState } from "react";
import { View, Text, Modal } from "react-native";
import { OnboardContext } from "../../services/onboard.context";
import { ModuleButton } from "../../components/button.component";
import { tourObj } from "./data/dashboard-tour-data";
import { DashboardTourComponentOnTop } from "./dashboard-tour-comp-top";
import { DashboardTourComponentOnBottom } from "./dashboard-tour-comp-bottom";
import { styles } from "./dashboard-styles";

export const DashboardTour = () => {
  const { tour, setTour } = useContext(OnboardContext);
  const componentOnBottomIndices = [2, 3, 5];
  const componentOnBottom = componentOnBottomIndices.includes(tour);

  return (
    <>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={tour !== null}>
          <View style={styles.modalBackground}>
            {!componentOnBottom? <DashboardTourComponentOnTop tour={tour} /> : null}
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[tour]?.tourTextBubble },
              ]}
            >
              {tour > 0 ? (
                <View
                  style={[
                    tour === 4 ? styles.triangleRightTop : styles.triangleTop,
                    componentOnBottom ? styles.triangleBottom : styles.triangleTopLeft 
                  ]}
                />
              ) : null}
              <Text style={styles.modalContent}>{tourObj[tour]?.text}</Text>
              <ModuleButton
                onPress={() => {
                  tour < 6 ? setTour((tour) => tour + 1) : setTour(null);
                }}
                title={tour === 0 ? "LET'S GO!" : "GOT IT!"}
              />
            </View>
            {componentOnBottom ? (
              <DashboardTourComponentOnBottom tour={tour} />
            ) : null}
          </View>
        </Modal>
      </View>
    </>
  );
};
