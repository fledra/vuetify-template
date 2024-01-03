import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/en';
import 'dayjs/locale/tr';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

dayjs.locale('en');

export { dayjs };
