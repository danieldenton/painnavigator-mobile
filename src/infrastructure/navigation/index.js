import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { SideMenuNavigator } from "./side-menu.navigator";

export const Navigation = () => {
  const { isAuthenticated, userLoading } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {userLoading ? (
        <ActivityIndicator
          size="large"
          color="#37b29d"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : isAuthenticated ? (
        <SideMenuNavigator />
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
