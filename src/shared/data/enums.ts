// * General
export enum Cookies {
  USER_IS_LOGGED = 'IsLogged'
}

export enum HttpStatus {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  SERVER_ERROR = 500
}

// * Router

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

//  * Components

export enum ButtonType {
  SUBMIT = 'submit'
}

export enum ButtonVariant {
  TEXT = 'text',
  CONTAINED = 'contained'
}

// * Alert types

export enum AlertSeverity {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum AlertText {
  LOADING = 'Loading...',
  CLIPBOARD_SUCCESS = 'The text was successfully copied'
}

export enum AlertAPIText {
  LOGIN_ERROR = 'Login Error',
  LOGIN_SUCCESS = 'Successful login',

  SERVER_ERROR = 'Error: Server error',

  USER_FORBIDDEN_ERROR = 'Error: The user is forbidden to access the requested resource.',
  USER_UNAUTHORIZED_ERROR = 'Error: The user is not authorized.',
  USER_UPDATE_ERROR = 'Error: Something went wrong during the updating process. Try again later.',
  USER_CREATE_SUCCESS = 'The user has been successfully created.',
  USER_UPDATE_SUCCESS = 'The user has been successfully updated.',

  EMAIL_DUPLICATE_ERROR = 'There is already an existing customer with the provided email.',

  REGISTRATION_CONNECTION_ERROR = 'Something went wrong during the registration process and that they should try again later.'
}

// * EcommerceApi
export enum CartUpdateActionTypes {
  INCREMENT = 'addLineItem',
  DECREMENT = 'removeLineItem',
  DELETE = 'delete',
  DISCOUNT = 'addDiscountCode'
}
