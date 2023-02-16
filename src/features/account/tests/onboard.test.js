import { renderWithContext1 } from "./onboardTest-utils"
import { screen, fireEvent, cleanup } from "@testing-library/react-native"
import { OnboardScreen } from "../screens/onboard.screen"
import { ProviderCodeScreen } from "../screens/provider-code.screen"
import { checkReferralCode } from "../../../services/authentication/authentication.service"

beforeEach(() => 
jest.useFakeTimers()
)
afterEach(cleanup)

describe("renders onboard screen correctly", () => {
    test("onboard screen renders sign up and login buttons", () => {
      renderWithContext1(<OnboardScreen />)
      const signupButton = screen.getByRole('button', /sign up/i)
      const loginButton = screen.getByRole('button', /login/i)
      expect(signupButton).toBeTruthy()
      expect(loginButton).toBeTruthy()
    })
  })

  describe('renders screen with elements and submits provider code', () => {
    test("provider code screen renders header, directions, link and code input", () => {
      renderWithContext1(<ProviderCodeScreen />)
        const header = screen.getByText(/enter your referral code$/i)
        const directions = screen.getByText(/to get one!$/i)
        const link = screen.getByRole('button', 'painnavigator.io')
        const input = screen.getByTestId("code-input")
        expect(header).toBeTruthy()
        expect(directions).toBeTruthy()
        expect(link). toBeTruthy()
        expect(input).toBeTruthy()
    })
    test("provider code screen renders submit button which when pressed calls checkReferralCode", async () => {
      jest.mock("../../../services/authentication/authentication.service", () => {
        return {
          checkReferralCode: jest.fn().mockImplementation(() => {
            
          })
        }    
      })
      renderWithContext1(<ProviderCodeScreen />)
      const submitButton = screen.getByRole('button', /submit/i)
      fireEvent.press(submitButton)
      const error = await screen.findByText("Please enter a valid code")
      expect(error).toBeTruthy()
    })
  })
