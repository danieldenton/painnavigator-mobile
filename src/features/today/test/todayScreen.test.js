import { render, screen } from "@testing-library/react-native";
import { TodayScreen } from "../screens/today.screen";

jest.spyOn(Intl.DateTimeFormat, 'new').mockReturnValue('1/28/2023', '08')

describe("renders today screen according to getUser call", () => {
    test("renders greeting", () => {
        render(<TodayScreen />)
        
    }) 
})