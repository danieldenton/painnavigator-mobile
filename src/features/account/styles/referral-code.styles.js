import { StyleSheet } from "react-native";
import { isAndroid } from "../../../utils";

export const styles = StyleSheet.create({
  rerferralHeaderWrapper: {
    alignItems: "center",
    marginTop: isAndroid ? 6 : 16,
  },
  referralHeader: {
    fontFamily: "Inter_500Medium",
    fontSize: isAndroid ? 23 : 25,
  },
  referralMessageWrapper: {
    alignItems: "center",
    marginTop: 16,
    marginLeft: 4,
    marginRight: 4,
  },
  referralMessage: {
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontSize: isAndroid ? 15.5 : 18,
    marginBottom: isAndroid ? 6 : 4,
    lineHeight: 26,
  },
  linkText: {
    fontFamily: "Inter_400Regular",
    fontSize: isAndroid ? 16 : 18,
    color: "blue",
    lineHeight: 26,
  },
  codeGraphicWrapper: {
    alignItems: "center",
    marginTop: isAndroid ? 45 : 65,
  },
});