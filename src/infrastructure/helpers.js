import * as Localization from 'expo-localization';
import { formatInTimeZone } from 'date-fns-tz';
import format from 'date-fns/format';

const time_zone = Localization.timezone;
const todays_date = new Date ();
export const time_zoned_todays_date = formatInTimeZone(todays_date, time_zone, 'M/dd/yy');

export function formatDate(date_time_value) {
    if (date_time_value) {
        return format(new Date(date_time_value), 'M/dd/yy')
    } else {
        return null
    }
};