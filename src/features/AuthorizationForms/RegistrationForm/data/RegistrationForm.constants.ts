import dayjs from 'dayjs';
import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import getMaxDate from '@/utils/getMaxDate';
import { COUNTRY_LIST } from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';

export const INIT_INPUTS_DATA = {
  birthday: dayjs(getMaxDate()).format('YYYY-MM-DD'),
  shippingCountry: COUNTRY_LIST[0].code,
  billingCountry: COUNTRY_LIST[0].code
};

export const INIT_POSTAL_PATTERN = {
  shipping: undefined,
  billing: undefined
};

export const INIT_ALERT_DATA = {
  typeAlert: Alerts.ERROR,
  textAlert: AlertsText.ERROR_EMAIL_TEXT
};
