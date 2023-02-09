import { screen, cleanup } from "@testing-library/react-native";
import React from "react";
import { renderWithContext } from "../../../../test-utils";
import { EducationUnitScreen } from "../screens/education-unit.screen";

describe("renders education unit screens and calls functions", () => {
    afterEach(cleanup)
    test.skip("renders mark complete button", () => {
        renderWithContext(<EducationUnitScreen />)
        const markCompleteButton = screen.getByRole('button', /mark complete/i)
        expect(markCompleteButton).toBeVisible
    })
})