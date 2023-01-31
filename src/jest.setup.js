import { setUser } from "@sentry/react-native";
import React from "react";
import { jestResetJsReanimatedModule } from "react-native-reanimated/lib/reanimated2/core";
import { server } from "./mocks/server";
import { AuthenticationContextProvider } from "./services/authentication"

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock('expo-localization', ()=> ({ 
  timezone: "America/Los_Angeles"
}))



