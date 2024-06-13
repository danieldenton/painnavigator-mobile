jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("./src/utils", () => ({
  todaysDate: new Date("2023-06-13T14:00:00Z"),
  timeZone: "America/Chicago",
  formatBackendCreatedAtDate: jest.fn((date) => date),
  formatDate: jest.fn((date) => date),
  isFocused: true,
}));
