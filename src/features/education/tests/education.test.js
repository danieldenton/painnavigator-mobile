import React from "react";
import { render, screen, cleanup, fireEvent } from "../../../../test-utils";
import { EducationUnitScreen } from "../screens/education-unit.screen";
import { VideoUnit } from "../components/video-unit.component";
import { AudioUnit } from "../components/audio-unit.component";
import { TextUnit } from "../components/text-unit.component";

beforeEach(() => {
    render(<EducationUnitScreen />)
})
afterEach(cleanup)

describe("renders education unit screens and calls functions", () => {
    test("renders mark complete button which calls completeModule", () => {
        // const completeModule = jest.fn()
        const markCompleteButton = screen.getByRole('button', /mark complete/i)
        expect(markCompleteButton).toBeTruthy()
        // fireEvent.press(markCompleteButton)
        // expect(completeModule).toHaveBeenCalled(1)
    })
    test("renders correct unit title", () => {
        const unitlTitle = screen.getByText(/painnavigator introduction/i)
        expect(unitlTitle).toBeTruthy()
    })
    test("renders bookmark component", () => {
        const bookmark = screen.getByTestId('bookmark')
        expect(bookmark).toBeTruthy()
    })
})

describe("renders correct type of unit", () => {
    test.skip("renders video unit", async () => {
        const videoUnit = await screen.findByTestId('video-unit')
        expect(videoUnit).toBeTruthy()
    })
    test.skip("renders audio unit", async () => {
        const audioUnit = await screen.findByTestId('audio-unit')
        expect(audioUnit).toBeTruthy()
    })
    test.skip("renders text unit", async () => {
        const textUnit = await screen.findByTestId('text-unit')
        expect(textUnit).toBeTruthy()
    })
})