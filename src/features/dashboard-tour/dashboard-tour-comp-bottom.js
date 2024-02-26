import { View } from "react-native";
import { styles } from "./dashboard-styles";
import { tourObj } from "./data/dashboard-tour-data";

export const DashboardTourComponentOnBottom = ({ tour }) => {
  return (
    <View
      style={[
        styles.bubble,
        { marginTop: tourObj[tour].tourComponentPlacement },
      ]}
    >
      {tourObj[tour].component}
    </View>
  );
};
