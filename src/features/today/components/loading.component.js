import React from "react";
import { View } from "react-native";
import { Loading } from "../../../icons";
export const LoadingComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loading/>
    </View>
  );
};
