import React from "react";
import { render, screen, cleanup, fireEvent } from "../../../../test-utils";
import { EducationUnitScreen } from "../screens/education-unit.screen";
import { VideoUnit } from "../components/video-unit.component";
import { AudioUnit } from "../components/audio-unit.component";
import { TextUnit } from "../components/text-unit.component";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

const page = (
    <NavigationContainer>
      <EducationUnitScreen>
        <NavigationBarLeft>
         <VideoUnit />
        </NavigationBarLeft>
      </EducationUnitScreen>
    </NavigationContainer>
)


describe("renders education unit screens and calls functions", () => {
    beforeEach(() => {
        render(<EducationUnitScreen />)
    })
    afterEach(cleanup)
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
    test.only("renders video unit", async () => {
        render(page)
        const videoUnit = await screen.findByTestId('video-unit')
        expect(videoUnit).toBeTruthy()
    })
    test.skip("renders audio unit", async () => {
        // testID does not yet exist in component
        const audioUnit = await screen.findByTestId('audio-unit')
        expect(audioUnit).toBeTruthy()
    })
    test.skip("renders text unit", async () => {
        // testID does not yet exist in component
        const textUnit = await screen.findByTestId('text-unit')
        expect(textUnit).toBeTruthy()
    })
})