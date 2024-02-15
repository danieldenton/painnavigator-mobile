import { View } from "react-native";
import { styles } from "./dashboard-styles";
import { tourObj } from "./data/dashboard-tour-data";

export const DashboardTourComponentOnBottom = ({ customTour }) => {
  return (
    <View
      style={[
        styles.bubble,
        { marginTop: tourObj[customTour].tourComponentPlacement },
      ]}
    >
      {tourObj[customTour].component}
    </View>
  );
};
