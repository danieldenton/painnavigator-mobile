import * as Localization from 'expo-localization';
import { track } from '@amplitude/analytics-react-native';

export const timeZone = Localization.timezone;
export const todaysDate = new Date ();
let options = {year: '2-digit', month: 'numeric', day: 'numeric', hour12: false, timeZone: timeZone }
export const timeZonedTodaysDate = new Intl.DateTimeFormat('en-US', options).format(todaysDate)

export function formatDate(date_time_value) {
    return date_time_value ? new Intl.DateTimeFormat('en-US').format(date_time_value) : null;
};

// export const handleTrackEvent = (trackEvent) => {
//     if (trackEvent) {
//         track(trackEvent)
//     }
// }


