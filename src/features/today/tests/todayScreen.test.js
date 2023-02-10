import { render, screen, cleanup } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";
import { TodayNavBar } from "../../../components/journals/navigation-bar.component"

describe("renders today screen navbar", () => {
  test.skip("renders message icon in upper right corner", async () => {
    render(<TodayNavBar />)
    const messageIcon = await screen.findByTestId()
    screen.debug(messageIcon)
    // const messageIcon = screen.getByTestId("messages")
    // expect(messageIcon).toBeVisible
  })
})

describe("renders today screen greeting and tiles according to getUser call", () => {
  // These test will depend on mock api call return in src/mocks/handlers.js
    beforeEach(() => {
      render(<TodayScreen />)
    })
    afterEach(cleanup)
    test("renders greeting", () => {
      // The greeting message will depend on what time of day it is. The default timezone for tests is Los Angeles.
      // const greeting = await screen.findByText(/^good morning/i)
      // const greeting = await screen.findByText(/^good afternoon/i)
      const greeting = screen.getByText(/^good evening/i)
      expect(greeting).toBeTruthy()
    }) 
    test("renders correct education tile", async () => {
      // educationProgress === 8 - the text will render according to the educationProgresss number
      const educationTile = await screen.findByText(/practical tips/i)
      expect(educationTile).toBeTruthy()
    })
    // test("test movement number", () => {
    //   const movement
    // })
    test("renders correct movement tile", async () => {
      // Why doesn't this test work?
      const movementTile = await screen.findByText(/foundations 1/i)
      expect(movementTile).toBeVisible
    })
    test("renders wellness coach tile", async () => {
      // Depends on wether or not hasUnreadMessages
      const coachTile = await screen.findByText(/check in with your coach/i)
      expect(coachTile).toBeVisible
      // need to figure out how to test if it's not here beyond this test failing.
    })
    test("renders finish profile tile", async () => {
      // profileComplete is a boolean but profile_status is a 1 or 0.
      const profileTile = await screen.findByText(/finish setting up profile/i)
      expect(profileTile).toBeVisible
    })
    test("renders journal tile", async () => {
      const journalTile = await screen.findByText(/make a journal entry/i)
      expect(journalTile).toBeVisible
    })
    test("renders smart goal tile", async () => {
      // if educationProgress > 7
      // const smartGoalTile = await screen.findByText(/create a smart goal/i)
      // if activeGoal
      const smartGoalTile = await screen.findByText(/update smart goal/i)
      expect(smartGoalTile).toBeVisible
    })
})