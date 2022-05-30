import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { ProfileContext } from "../../services/profile/profile-context";
import { AccountNavigator } from "./account.navigator";
import { SideMenuNavigator } from "./side-menu.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { onboardingComplete } = useContext(ProfileContext);

  return (
    <NavigationContainer>
      {isAuthenticated & onboardingComplete ? <SideMenuNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
