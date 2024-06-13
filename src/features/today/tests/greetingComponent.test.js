import { render } from "../../../../test-utils.js"
import { Greeting } from "../components/greeting.component.js";

jest.mock("../../../utils", () => ({
  todaysDate: new Date("2023-06-13T14:00:00Z"),
  timeZone: "America/Chicago",
  isFocused: true,
}));

describe("Greeting", () => {
    const realDateTimeFormat = Intl.DateTimeFormat;
  
    beforeAll(() => {
      Intl.DateTimeFormat = jest.fn().mockImplementation((locale, options) => {
        return {
          format: (date) => {
            const dateInChicago = new Date(date.toLocaleString("en-US", { timeZone: "America/Chicago" }));
            return dateInChicago.getHours();
          },
        };
      });
    });
  
    afterAll(() => {
      Intl.DateTimeFormat = realDateTimeFormat;
    });
  
    it("renders Good Morning greeting", () => {
      jest.spyOn(global, "Date").mockImplementation(() => new Date("2023-06-13T13:00:00Z")); // 8 AM Chicago time
      const { getByText } = render(<Greeting name="Test" />);
      expect(getByText("Good Morning,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });
  
    it("renders Good Afternoon greeting", () => {
      jest.spyOn(global, "Date").mockImplementation(() => new Date("2023-06-13T19:00:00Z")); // 2 PM Chicago time
      const { getByText } = render(<Greeting name="Test" />);
      expect(getByText("Good Afternoon,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });
  
    it("renders Good Evening greeting", () => {
      jest.spyOn(global, "Date").mockImplementation(() => new Date("2023-06-14T00:00:00Z")); // 7 PM Chicago time
      const { getByText } = render(<Greeting name="Test" />);
      expect(getByText("Good Evening,")).toBeTruthy();
      expect(getByText("Test")).toBeTruthy();
    });
});
