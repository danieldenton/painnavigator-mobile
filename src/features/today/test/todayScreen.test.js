import { cleanup, screen } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import React from "react";
import { TodayScreen } from "../screens/today.screen";

afterEach(cleanup)

// userOne has made some progress in the program
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useEffect: () => 
//       {
        
//       }
// }))

// userTwo is a brand new user

describe("renders today screen according to getUser call", () => {
    test("renders greeting", async () => {
        renderWithContext(<TodayScreen />)
        const greeting = await screen.findByText(/good morning test3/i)
        expect(greeting).toBeOnTheScreen
    }) 
})