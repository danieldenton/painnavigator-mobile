import { Platform } from "react-native";
import * as Localization from "expo-localization";

export const isAndroid = Platform.OS === "android";

export const isIPad = Platform.isPad 

export const timeZone = Localization.timezone;
export const todaysDate = new Date();
let options = {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour12: false,
  timeZone: timeZone,
};
export const timeZonedTodaysDate = new Intl.DateTimeFormat(
  "en-US",
  options
).format(todaysDate);
let optionsDayteNoYear = {
  month: "2-digit",
  day: "2-digit",
  timeZone: timeZone,
};
export const foodJournalTimeZonedTodaysDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour12: false,
  timeZone: timeZone,
}).format(todaysDate);

export function formatDate(date_time_value) {
  if (date_time_value) {
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date_time_value)
    return formattedDate
  }
}

export function formatBackendCreatedAtDate(dateString) {
  if (dateString) {
    const dateObject = new Date(dateString);
    const newDate = formatDate(dateObject);
    return newDate;
  }
}

export function formatDateNoYear(date_time_value) {
  return date_time_value
    ? new Intl.DateTimeFormat("en-US", optionsDayteNoYear).format(
        date_time_value
      )
    : null;
}
