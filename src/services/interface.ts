interface IAddress {
  country: string;
  postalCode: string;
  city: string;
}

export interface ICreateCustomerParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  addresses: IAddress[];
  billingAddresses: number[];
  shippingAddresses: number[];
}
