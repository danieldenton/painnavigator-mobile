import { render, screen } from "@testing-library/react-native";
import { renderWithContext } from "../../../../test-utils";
import React from "react";
import { TodayScreen } from "../screens/today.screen";

// import dont destructure useState without using the enzyme course fix 

describe("renders today screen according to getUser call", () => {
    test("renders greeting", () => {
        renderWithContext(<TodayScreen />)
        
    }) 
})