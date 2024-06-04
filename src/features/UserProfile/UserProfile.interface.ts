import { IAddress } from '@/services/ECommerceInitApi.interface';

export interface IAddresses {
  id: string;
  addressData: IAddress;
  isBilling: boolean;
  isShipping: boolean;
  isDefaultBilling: boolean;
  isDefaultShipping: boolean;
}

export interface IResponseAddressData extends IAddress {
  id: string;
}

export interface IResponseUserData {
  version: number;
  birthday: string;
  email: string;
  lastName: string;
  firstName: string;
}
