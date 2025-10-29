// * General
export enum Cookies {
  USER_IS_LOGGED = 'IsLogged'
}

export enum ZIndex {
  LINK = 100,
  BUTTON = 101,
  TEXT = 102
}

export enum HttpStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  CONFLICT = 409,

  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502
}

// * Router

export enum Paths {
  MAIN = '/',

  ABOUT_US = '/about-us',
  CART = '/cart',
  CATALOG = '/catalog',
  CATALOG_CATEGORY = ':category',
  DETAILED_PRODUCT = '/detailed-product',
  DETAILED_PRODUCT_ID = ':id',

  LOGIN = '/login',
  REGISTRATION = '/registration',
  USER = '/user',

  ERROR = '/error',
  NONEXISTENT = '*'
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

export enum AlertText {
  CLIPBOARD_SUCCESS = 'The text was successfully copied',
  LOADING = 'Loading...'
}

export enum AlertSeverity {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning'
}

export enum AlertAPIText {
  EMAIL_DUPLICATE_ERROR = 'There is already an existing customer with the provided email.',
  SERVER_ERROR = 'Error: Server error',

  LOGIN_ERROR = 'Login Error',
  LOGIN_SUCCESS = 'Successful login',
  REGISTRATION_CONNECTION_ERROR = 'Something went wrong during the registration process and that they should try again later.',

  USER_FORBIDDEN_ERROR = 'Error: The user is forbidden to access the requested resource.',
  USER_UNAUTHORIZED_ERROR = 'Error: The user is not authorized.',
  USER_UPDATE_ERROR = 'Error: Something went wrong during the updating process. Try again later.',

  USER_CREATE_SUCCESS = 'The user has been successfully created.',
  USER_UPDATE_SUCCESS = 'The user has been successfully updated.'
}
