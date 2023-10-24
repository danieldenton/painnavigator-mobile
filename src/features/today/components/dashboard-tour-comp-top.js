import { View } from "react-native";
import { styles } from "./dashboard-styles";
import { tourObj } from "../data/dashboard-tour-data";

export const DashboardTourComponentOnTop = ({ customTour, tour }) => {
  return customTour < 4 || tour === 5 ? (
    <View
      style={[
        styles.bubble,
        { marginTop: tourObj[customTour]?.tourComponentPlacement },
      ]}
    >
      {tourObj[customTour]?.component}
    </View>
  ) : customTour === 4 ? (
    <View style={styles.messageContainer}>
      <View
        style={[
          styles.bubble,
          { marginTop: tourObj[customTour].tourComponentPlacement },
        ]}
      >
        {tourObj[customTour].component}
      </View>
    </View>
  ) : (
    <View style={styles.menuContainer}>
      <View
        style={[
          styles.bubble,
          { marginTop: tourObj[customTour].tourComponentPlacement },
        ]}
      >
        {tourObj[customTour]?.component}
      </View>
    </View>
  );
};
