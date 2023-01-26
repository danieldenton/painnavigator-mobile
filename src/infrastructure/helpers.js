import * as Localization from 'expo-localization';
import format from 'date-fns/format';


const time_zone = Localization.timezone;
const todaysDate = new Date ();
let options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', hour12: false, timeZone: time_zone }
export const time_zoned_todays_date = new Intl.DateTimeFormat('en-US', options).format(todaysDate)



export function formatDate(date_time_value) {
    return date_time_value ? format(new Date(date_time_value), 'M/dd/yy') : null;
};


