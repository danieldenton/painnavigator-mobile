import React, { useContext } from "react";
import { View, Text, Modal, Linking } from "react-native";
import { ModuleButton } from "../../../components/button.component";
import { tourObj } from "../../dashboard-tour/data/dashboard-tour-data";
import { styles } from "../../dashboard-tour/dashboard-styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const AppUpdateRequired = () => {
  const { patchAppUpdateRequired, setAppUpdateRequired, appUpdateRequired } =
    useContext(AuthenticationContext);
  const linkToAppStore = "https://qrco.de/bcZpLu";

  const handleAppUpdateRequired = () => {
    patchAppUpdateRequired();
    setAppUpdateRequired(false);
    Linking.openURL(linkToAppStore);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={appUpdateRequired}
        >
          <View style={styles.modalBackground}>
            <View
              style={[
                styles.modalContainer,
                { marginTop: tourObj[2].tourTextBubble },
              ]}
            >
              <Text style={styles.modalContent}>
                We've made some changes. Please update your PainNavigator app to
                proceed.
              </Text>
              <ModuleButton
                onPress={() => handleAppUpdateRequired()}
                title={"UPDATE NOW"}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
