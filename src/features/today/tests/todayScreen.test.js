import { render, screen } from "../../../../test-utils";
import { TodayScreen } from "../screens/today.screen";

jest.mock("../../../utils", () => ({
  todaysDate: new Date("2023-06-13T14:00:00Z"),
  timeZone: "America/Chicago",
  formatBackendCreatedAtDate: jest.fn(date => date),
  formatDate: jest.fn(date => date),
  isFocused: true,
}));

describe("Today Screen", () => {
  describe("Navbar", () => {});
  describe("Greeting", () => {
    const realDateTimeFormat = Intl.DateTimeFormat;

    beforeAll(() => {
      Intl.DateTimeFormat = jest.fn().mockImplementation((locale, options) => {
        return {
          format: (date) => {
            const dateInChicago = new Date(
              date.toLocaleString("en-US", { timeZone: "America/Chicago" })
            );
            return dateInChicago.getHours();
          },
        };
      });
    });

    afterAll(() => {
      Intl.DateTimeFormat = realDateTimeFormat;
    });
  });

  it("renders Good Morning greeting", () => {
    jest
      .spyOn(global, "Date")
      .mockImplementation(() => new Date("2023-06-13T13:00:00Z")); // 8 AM Chicago time
    const { getByText } = render(<TodayScreen />);
    expect(getByText("Good Morning,")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
  });

  it("renders Good Afternoon greeting", () => {
    jest
      .spyOn(global, "Date")
      .mockImplementation(() => new Date("2023-06-13T19:00:00Z")); // 2 PM Chicago time
    const { getByText } = render(<TodayScreen />);
    expect(getByText("Good Afternoon,")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
  });

  it("renders Good Evening greeting", () => {
    jest
      .spyOn(global, "Date")
      .mockImplementation(() => new Date("2023-06-14T00:00:00Z")); // 7 PM Chicago time
    const { getByText } = render(<TodayScreen />);
    expect(getByText("Good Evening,")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
  });

  describe("Today's Pain Score", () => {});
  describe("Today's Movement", () => {});
  describe("Today's Education", () => {});
  describe("Daily Activities", () => {});
});
