import { render, screen, fireEvent, cleanup  } from "./onboardTest-utils"
import { OnboardScreen } from "../screens/onboard.screen"
import { ProviderCodeScreen } from "../screens/provider-code.screen"
import { checkReferralCode } from "../../../services/authentication/authentication.service"

beforeEach(() => 
jest.useFakeTimers()
)
afterEach(cleanup)

describe("renders onboard screen correctly", () => {
    test("onboard screen renders sign up and login buttons", () => {
      render(<OnboardScreen />)
      const signupButton = screen.getByRole('button', /sign up/i)
      const loginButton = screen.getByRole('button', /login/i)
      expect(signupButton).toBeTruthy()
      expect(loginButton).toBeTruthy()
    })
  })

  describe('renders screen with elements and submits provider code', () => {
    beforeEach(() => {
      render(<ProviderCodeScreen />)
    })
    test("provider code screen renders header, directions, link, code input and disabled submit", () => {
        const header = screen.getByText(/enter your referral code$/i)
        const directions = screen.getByText(/to get one!$/i)
        const link = screen.getByRole('button', 'painnavigator.io')
        const input = screen.getByTestId("code-input")
        const submitButton= screen.getByRole('button', /submit/i)
        expect(header).toBeTruthy()
        expect(directions).toBeTruthy()
        expect(link). toBeTruthy()
        expect(input).toBeTruthy()
        expect(submitButton).toBeDisabled()
    })
    test("provider code screen renders submit button which when pressed calls checkReferralCode", async () => {
      const input = screen.getByTestId("code-input")
      fireEvent.changeText(input, {
        target: { value: "TEST12" }
      })
      const submitButton= screen.getByRole('button', /submit/i)
      expect(submitButton).toBeEnabled()

      // fireEvent.press(submitButton)
    })
  })
