import { render, screen } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";
import { TodayNavBar } from "../../../components/journals/navigation-bar.component"

describe("renders today screen navbar", () => {
  test("renders upper left menu button", async() => {
    render(<TodayScreen />)
    const menuButton = await screen.findByTestId("menu")
    expect(menuButton).toBeTruthy()
  })
  test("renders upper right message icon", async () => {
    render(<TodayScreen />)
    const messages = await screen.findByTestId("messages")
    expect(messages).toBeTruthy()
  })
  // Doesn't work.
  test.skip("renders message icon in upper right corner", async () => {
    render(<TodayNavBar />)
    const unreadMessageIcon = await screen.findByTestId("unread-messages")
    // const messageIcon = await screen.findByTestId("messages")
    expect(unreadMessageIcon).toBeTruthy()
    // expect(messageIcon).toBeTruthy()
  })
})

describe("renders today screen greeting and tiles according to getUser call", () => {
  // These test will depend on mock api call return in src/mocks/handlers.js
    beforeEach(() => {
      render(<TodayScreen />)
    })
    test.skip("renders greeting", async () => {
      // The greeting message will depend on what time of day it is. The default timezone for tests is Los Angeles.
      // const greeting = await screen.findByText(/^good morning/i)
      const greeting = await screen.findByText(/^good afternoon/i)
      // const greeting = await screen.findByText(/^good evening/i)
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
      expect(movementTile).toBeTruthy()
    })
    test("renders wellness coach tile", async () => {
      // Depends on wether or not hasUnreadMessages
      const coachTile = await screen.findByText(/check in with your coach/i)
      expect(coachTile).toBeTruthy()
      // There is no way for this not.toBeTruthy(). It won't find the element in the first place. You can cause this test to fail if 
    })
    test("renders finish profile tile", async () => {
      // profileComplete is a boolean but profile_status is a 1 or 0. Which seems to function if (profile_status === 1) { setProfileComplete(true)}
      // This seems to render in a lagged way which is why I believe this text is failing. No way to test it's absence.
      const profileTile = await screen.findByText(/finish setting up profile/i)
      expect(profileTile).toBeTruthy()
    })
    test("renders journal tile", async () => {
      const journalTile = await screen.findByText(/make a journal entry/i)
      expect(journalTile).toBeTruthy()
    })
    test("renders smart goal tile", async () => {
      // if educationProgress > 7
      // const smartGoalTile = await screen.findByText(/create a smart goal/i)
      // if activeGoal
      const smartGoalTile = await screen.findByText(/update smart goal/i)
      expect(smartGoalTile).toBeTruthy()
    })
})