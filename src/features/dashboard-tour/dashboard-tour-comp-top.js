import { View } from "react-native";
import { styles } from "./dashboard-styles";
import { tourObj } from "./data/dashboard-tour-data";

export const DashboardTourComponentOnTop = ({ tour }) => {
  return (
    <View style={tour === 4 ? styles.messageContainer : styles.menuContainer}>
      <View
        style={[
          styles.bubble,
          { marginTop: tourObj[tour]?.tourComponentPlacement },
        ]}
      >
        {tourObj[tour]?.component}
      </View>
    </View>
  );
};
