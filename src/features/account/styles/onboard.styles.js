import { StyleSheet } from "react-native";
import { isAndroid } from "../../../utils";

export const styles = StyleSheet.create({
  welcome: {
    fontFamily: "Inter_500Medium",
    fontSize: isAndroid ? 22 : 25,
  },
  welcomeMessage: {
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontSize: isAndroid ? 15 : 18,
    marginBottom: 4,
    lineHeight: 26,
  },
});