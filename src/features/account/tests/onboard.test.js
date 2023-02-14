import { render, screen, cleanup } from "../../../../test-utils";
import { OnboardScreen } from "../screens/onboard.screen"
import { ProviderCodeScreen } from "../screens/provider-code.screen"

describe("new user onboard screen tests", () => {
    test("onboard screen renders sign up and login buttons", () => {
      render(<OnboardScreen />)
      const signupButton = screen.getByRole('button', /sign up/i)
      const loginButton = screen.getByRole('button', /login/i)
      expect(signupButton).toBeTruthy()
      expect(loginButton).toBeTruthy()
    })
    test.only("renders header and directions", () => {
        render(<ProviderCodeScreen />)
        // screen.debug()
        // const header = screen.getByText(/enter your referral code/i)
        // const directions = screen.getByText(/to get one!$/i)
        // const link = screen.getByRole('link', 'painnavigator.io')
        // expect(header).toBeTruthy()
        // expect(directions).toBeTruthy()
        // expect(link). toBeTruthy()
    })
})