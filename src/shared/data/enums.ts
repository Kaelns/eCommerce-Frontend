// * General
export enum Cookies {
  USER_IS_LOGGED = 'IsLogged'
}

export enum HttpStatus {
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401
}

// * Router

export enum Paths {
  ABOUT_US = '/about-us',
  BASKET = '/basket',
  CATALOG = '/catalog',
  CATALOG_CATEGORY = ':category',
  DETAILED_PRODUCT = '/detailed-product',
  DETAILED_PRODUCT_ID = ':id',
  ERROR = '/error',
  LOGIN = '/login',
  MAIN = '/',
  NONEXISTENT = '*',
  REGISTRATION = '/registration',
  USER = '/user'
}

//  * Components

export enum ButtonType {
  SUBMIT = 'submit'
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  TEXT = 'text'
}

// * Alert types

export enum AlertSeverity {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum AlertText {
  CLIPBOARD_SUCCESS = 'The text was successfully copied',
  LOADING = 'Loading...'
}

export enum AlertAPIText {
  EMAIL_DUPLICATE_ERROR = 'There is already an existing customer with the provided email.',
  LOGIN_ERROR = 'Login Error',

  LOGIN_SUCCESS = 'Successful login',

  REGISTRATION_CONNECTION_ERROR = 'Something went wrong during the registration process and that they should try again later.',
  SERVER_ERROR = 'Error: Server error',
  USER_CREATE_SUCCESS = 'The user has been successfully created.',
  USER_FORBIDDEN_ERROR = 'Error: The user is forbidden to access the requested resource.',
  USER_UNAUTHORIZED_ERROR = 'Error: The user is not authorized.',

  USER_UPDATE_ERROR = 'Error: Something went wrong during the updating process. Try again later.',

  USER_UPDATE_SUCCESS = 'The user has been successfully updated.'
}

// * EcommerceApi
export enum CartUpdateActionTypes {
  DECREMENT = 'removeLineItem',
  DELETE = 'delete',
  DISCOUNT = 'addDiscountCode',
  INCREMENT = 'addLineItem'
}
