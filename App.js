import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { EducationModulesNavigator } from "./src/infrastructure/navigation/education-module.navigator";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { NavigationContainer } from "@react-navigation/stack";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <EducationModulesNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
