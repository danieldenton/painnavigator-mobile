import { screen, cleanup } from "@testing-library/react-native";
import React from "react";
import { renderWithContext } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";


describe("renders today screen according to getUser call", () => {
  // beforeEach
    afterEach(cleanup)
    test("renders greeting", async () => {
      renderWithContext(<TodayScreen />) 
      // The greeting message will depend on what time of day it is. The default timezone for tests is Los Angeles.
      const greeting = await screen.findByText(/^good morning/i)
      // const greeting = await screen.findByText(/^good sfternoon/i)
      // const greeting = await screen.findByText(/^good evening/i)
      expect(greeting).toBeVisible
    }) 
    test("renders correct education tile", async () => {
      // depends on mock api call return in src/mocks/handlers.js
      renderWithContext(<TodayScreen />)
      const educationTile = await screen.findByText(/vcop/i)
      expect(educationTile).toBeVisible
    })
    test("renders correct movement tile", async () => {
      // depends on mock api call return in src/mocks/handlers.js
      renderWithContext(<TodayScreen />)
      const movementTile = await screen.findByText("Foundations 1")
      expect(movementTile).toBeVisible
    })
    test("renders wellness coach tile", async () => {
      // depends on mock api call return in src/mocks/handlers.js
      renderWithContext(<TodayScreen />)
      const coachTile = await screen.findByText(/check in with your coach/i)
      expect(coachTile).toBeVisible
    })
    test("renders finish profile tile", async () => {
      // depends on mock api call return in src/mocks/handlers.js
      renderWithContext(<TodayScreen />)
      const profileTile = await screen.findByText(/finish setting up profile/i)
      expect(profileTile).toBeVisible
    })
    test("renders journal tile", async () => {
      renderWithContext(<TodayScreen />)
      const journalTile = await screen.findByText(/make a journal entry/i)
      expect(journalTile).toBeVisible
    })
})