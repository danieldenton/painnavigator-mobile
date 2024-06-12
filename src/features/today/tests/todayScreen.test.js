import { render, screen } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";

describe("Today Screen", () => {
  beforeEach(() => {
    render(<TodayScreen />);
  });
  describe("Navbar", () => {});
  describe("Greeting", () => {
    test("renders greeting", async () => {
      // The greeting message will depend on what time of day it is. The default timezone for tests is Los Angeles.
      // const greeting = await screen.findByText(/^good morning/i)
      const greeting = await screen.findByText(/^good afternoon/i)
      // const greeting = await screen.findByText(/^good evening/i)
      expect(greeting).toBeTruthy()
    }) 
  })
  describe("Today's Pain Score", () => {

  });
  describe("Today's Movement", () => {});
  describe("Today's Education", () => {});
  describe("Daily Activities", () => {});
});
