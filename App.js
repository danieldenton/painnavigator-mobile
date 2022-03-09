import React from "react";

import { BookmarksContextProvider } from "./src/services/bookmarks/bookmarks.context";
import { EducationModulesContextProvider } from "./src/services/educationModules/education-modules.context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BookmarksContextProvider>
          <EducationModulesContextProvider>
            <Navigation />
          </EducationModulesContextProvider>
        </BookmarksContextProvider>
      </ThemeProvider>
    </>
  );
}
