import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { SideMenuNavigator } from "./side-menu.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <SideMenuNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
