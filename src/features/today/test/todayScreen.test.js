import { screen, fireEvent, cleanup } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";


afterEach(cleanup)

describe("renders today screen according to getUser call", () => {
    beforeEach(() => {
      renderWithContext(<TodayScreen />)      
    })
    test("renders greeting", async () => {
      const greeting = await screen.findByText(/^good morning/i)
      
        // const greeting = await screen.findByText(/^good morning/i)
        // expect(greeting).
    }) 
})