import { render, screen } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";

describe("renders today screen according to getUser call", () => {
    test("renders greeting", () => {
        renderWithContext(<TodayScreen />)
        
    }) 
})