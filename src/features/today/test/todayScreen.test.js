import { cleanup, screen } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import React from "react";
import { TodayScreen } from "../screens/today.screen";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";



  

afterEach(cleanup)

describe("renders today screen according to getUser call", () => {
    beforeEach(() => {
        const { setUser } = useContext(AuthenticationContext);
        const mockSetUser = jest.fn(() => {
            setUser({ uid: '6Iw0r8lNxmQ8MDt5hipTI4xrZNA2'})
          })
        jest.mock('react', () => ({
           ...jest.requireActual('react'),
           useState: (initialState) => [initialState, mockSetUser]
        }))
          renderWithContext(<TodayScreen />)
    })
    test("renders greeting", async () => {
        
        const greeting = await screen.findByText(/good morning test3/i)
        expect(greeting).toBeOnTheScreen()
    }) 
})