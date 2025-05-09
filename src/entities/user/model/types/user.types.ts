export interface UserLocation {
  country: string;
  language: string;
}

export interface UserCredentials {
  email: string;
  lastName: string;
  password: string;
  firstName: string;
  dateOfBirth: string;
  addresses: Address[];
  shippingAddresses: number[];
  billingAddresses?: number[] | undefined;
  defaultBillingAddress?: number | undefined;
  defaultShippingAddress?: number | undefined;
}

interface Address {
  city: string;
  country: string;
  streetName: string;
  postalCode: string;
  streetNumber: string;
  apartment?: string | undefined;
}
