import React, { useContext, useState } from "react";
import { View, Text, Modal } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { ModuleButton } from "../../components/button.component";
import { tourObj } from "./data/dashboard-tour-data";
import { DashboardTourComponentOnTop } from "./dashboard-tour-comp-top";
import { DashboardTourComponentOnBottom } from "./dashboard-tour-comp-bottom"
import { styles } from "./dashboard-styles";

export const DashboardTour = () => {
  const { tour, setTour } = useContext(
    AuthenticationContext
  );


  const handleFinish = () => {
    setTour(null);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={tour !== null}>
          <View style={styles.modalBackground}>
            {tour !== 0 &&
            tour !== 2 &&
            tour !== 3 &&
            tour !== 5 ? (
              <DashboardTourComponentOnTop
                tour={tour}
              />
            ) : null}
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[tour]?.tourTextBubble },
              ]}
            >
              {tour > 0 ? (
                <View
                  style={[
                    tour === 4
                      ? styles.triangleRightTop
                      : styles.triangle,
                    tour !== 2 && tour !== 3 && tour !== 5
                      ? styles.topLeft
                      : styles.bottom,
                  ]}
                />
              ) : null}
              <Text style={styles.modalContent}>{tourObj[tour]?.text}</Text>
              <ModuleButton
                onPress={() => {
                  tour < 6
                    ? tour === 3 
                      ? setTour((tour) => tour + 2)
                      : setTour((tour) => tour + 1)
                    : handleFinish();
                }}
                title={tour === 0 ? "LET'S GO!" : "GOT IT!"}
              />
            </View>
            {tour === 2 || tour === 3 || tour === 5 ? (
              <DashboardTourComponentOnBottom tour={tour} />
            ) : null}
          </View>
        </Modal>
      </View>
    </>
  );
};
