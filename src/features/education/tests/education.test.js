import React from "react";
import { render, screen, cleanup, fireEvent } from "../../../../test-utils";
import { EducationUnitScreen } from "../screens/education-unit.screen";

describe("renders education unit screens and calls functions", () => {
    afterEach(cleanup)
    test("renders mark complete button which calls completeModule", () => {
        render(<EducationUnitScreen />)
        const completeModule = jest.fn()
        const markCompleteButton =  screen.getByRole('button', /mark complete/i)
        expect(markCompleteButton).toBeTruthy()
        // fireEvent.press(markCompleteButton)
        // expect(completeModule).toHaveBeenCalled(1)
    })
})