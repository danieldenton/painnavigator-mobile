import { render, screen } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";

// jest.spyOn(timeZoneDateNumber).mockReturnValue('08')
// jest.spyOn(DateTimeFormat, 'new').mockReturnValue('1/28/2023', '08')

// Object.defineProperty(Intl.DateTimeFormat, 'new', {
//     value: () => 1/30/2023
// })

// Object.defineProperty(Localization, 'timezone', {
//     value: 'America/Los Angeles'
//   })



describe("renders today screen according to getUser call", () => {
    test("renders greeting", () => {
        renderWithContext(<TodayScreen />)
        
    }) 
})