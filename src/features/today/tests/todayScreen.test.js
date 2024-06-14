import { render, screen } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";

describe("Today Screen", () => {
  describe("Navbar", () => {});
  describe("Greeting", () => {
    const realDate = Date;

    beforeAll(() => {
      global.Date = class extends Date {
        constructor(...args) {
          if (args.length) {
            super(...args);
          } else {
            super('2023-06-13T14:00:00Z'); // Default mocked date
          }
        }
      };
      const getUser = jest.fn(() => Promise.resolve({}))
    });
  
    afterAll(() => {
      global.Date = realDate;
    });

    test("renders Good Morning greeting", () => {
      jest
        .spyOn(global, "Date")
        .mockImplementation(() => new Date("2023-06-13T13:00:00Z"));
      const { getByText } = render(<TodayScreen />);
      expect(getByText("Good Morning,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });

    test("renders Good Afternoon greeting", () => {
      jest
        .spyOn(global, "Date")
        .mockImplementation(() => new Date("2023-06-13T19:00:00Z"));
      const { getByText } = render(<TodayScreen />);
      expect(getByText("Good Afternoon,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });

    test("renders Good Evening greeting", () => {
      jest
        .spyOn(global, "Date")
        .mockImplementation(() => new Date("2023-06-14T00:00:00Z"));
      const { getByText } = render(<TodayScreen />);
      expect(getByText("Good Evening,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });
  });
  describe("Today's Pain Score", () => {});
  describe("Today's Movement", () => {});
  describe("Today's Education", () => {});
  describe("Daily Activities", () => {});
});
