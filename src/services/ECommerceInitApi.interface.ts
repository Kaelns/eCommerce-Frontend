export interface IAddress {
  country: string;
  postalCode: string;
  city: string;
  streetName: string;
}

export interface ICreateCustomerParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  addresses: IAddress[];
  shippingAddresses: number[];
  billingAddresses?: number[];
  defaultBillingAddress?: number;
  defaultShippingAddress?: number;
}
