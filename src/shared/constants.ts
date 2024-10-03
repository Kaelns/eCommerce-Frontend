import dayjs from 'dayjs';
import { keyframes } from '@mui/material';
import getMaxDate from '@/utils/getMaxDate';
import getMinDate from '@/utils/getMinDate';
import { IAutocompleteOptions } from '@/shared/types';

export const DATE_DASH = 'YYYY-MM-DD';
export const MAX_DATE_DASH = dayjs(getMaxDate()).format(DATE_DASH);
export const MAX_DATE = dayjs(getMaxDate());
export const MIN_DATE = dayjs(getMinDate());

export enum Paths {
  MAIN = '/',
  USER = '/user',
  ERROR = '/error',
  LOGIN = '/login',
  BASKET = '/basket',
  CATALOG = '/catalog',
  ABOUT_US = '/about-us',
  NONEXISTENT = '*',
  REGISTRATION = '/registration',
  CATALOG_CATEGORY = ':category',
  DETAILED_PRODUCT = '/detailed-product',
  DETAILED_PRODUCT_ID = ':id'
}

export enum Severity {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info'
}

export enum ButtonType {
  SUBMIT = 'submit'
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  TEXT = 'text'
}

export enum AlertsAPIText {
  LOGIN_SUCCESS = 'Successful login',
  LOGIN_ERROR = 'Login Error',
  USER_CREATE_SUCCESS = 'The user has been successfully created.',
  USER_UPDATE_SUCCESS = 'The user has been successfully updated.',
  USER_UPDATE_ERROR = 'Something went wrong during the updating process and that they should try again later.',
  EMAIL_DUPLICATE_ERROR = 'There is already an existing customer with the provided email.',
  REGISTRATION_CONNECTION_ERROR = 'Something went wrong during the registration process and that they should try again later.'
}

export enum AlertsText {
  LOADING = 'Loading...',
  CLIPBOARD_SUCCESS = 'The text was successfully copied'
}

export const COUNTRY_LIST: IAutocompleteOptions[] = [
  { label: 'United States', code: 'US', postalCodePattern: /^[0-9]{4,5}$/gm },
  { label: 'Russia', code: 'RU', postalCodePattern: /^[0-9]{6}$/gm },
  { label: 'Belarus', code: 'BY', postalCodePattern: /^[0-9]{6}$/gm }
];

export const revealAnimation = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});

export const hideAnimation = keyframes({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});

export const pulseAnimation = keyframes({
  '0%': {
    boxShadow: '0 0 0 0 rgba(204, 169, 44, 0.6)'
  },
  '70%': {
    boxShadow: '0 0 0 10px rgba(204, 169, 44, 0.1)'
  },
  '100%': {
    boxShadow: '0 0 0 0 rgba(204, 169, 44, 0)'
  }
});
