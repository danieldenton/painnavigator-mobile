import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { ProfileContext } from "../../services/profile/profile-context";
import { AccountNavigator } from "./account.navigator";
import { TodayNavigator } from "../navigation/today.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { profileComplete } = useContext(ProfileContext);

  return (
    <NavigationContainer>
      {isAuthenticated & profileComplete ? <TodayNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
