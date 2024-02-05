import { View } from "react-native";
import { styles } from "./dashboard-styles";
import { tourObj } from "../data/dashboard-tour-data";

export const DashboardTourComponentOnTop = ({ customTour, tour }) => {
  return (
    <View
      style={
        customTour < 4 || tour === 5
          ? null
          : customTour === 4
          ? styles.messageContainer
          : styles.menuContainer
      }
    >
      <View
        style={[
          styles.bubble,
          { marginTop: tourObj[customTour]?.tourComponentPlacement },
        ]}
      >
        {tourObj[customTour]?.component}
      </View>
    </View>
  );
};
