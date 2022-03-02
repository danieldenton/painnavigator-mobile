import React from "react";
import { Text, View } from "react-native";
import { EducationUnit } from "./src/features/educationModules/screens/education-unit.screen";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, alignItems:"center", justifyContent: "center"}}>
          <EducationUnit />
        </View>
      </ThemeProvider>
    </>
  );
}
