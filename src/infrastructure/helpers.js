import * as Localization from 'expo-localization';

export const timeZone = Localization.timezone;
export const todaysDate = new Date ();
let options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', hour12: false, timeZone: timeZone }
export const timeZonedTodaysDate = new Intl.DateTimeFormat('en-US', options).format(todaysDate)

export function formatDate(date_time_value) {
    return date_time_value ? new Intl.DateTimeFormat('en-US').format(date_time_value) : null;
};


