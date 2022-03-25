import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { TodayNavigator } from "../navigation/today.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TodayNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
