import React from "react";

import { EducationModulesContextProvider } from "./src/services/educationModules/education-modules.context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EducationModulesContextProvider>
          <Navigation />
        </EducationModulesContextProvider>
      </ThemeProvider>
    </>
  );
}
