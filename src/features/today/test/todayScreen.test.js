import { screen, cleanup } from "@testing-library/react-native";
import React from "react";
import { renderWithContext } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";


describe("renders today screen according to getUser call", () => {
    afterEach(cleanup)
    test("renders greeting", async () => {
      renderWithContext(<TodayScreen />) 
      // The greeting message will depend on what time of day it is. The default timezone for tests is Los Angeles.
      const greeting = await screen.findByText(/^good morning/i)
      expect(greeting).toBeVisible
    }) 
})