import { IAddress } from '@/services/ECommerceInitApi.interface';

export interface IAddresses {
  id: string;
  addressData: IAddress;
  isBilling: boolean;
  isShipping: boolean;
  isDefaultBilling: boolean;
  isDefaultShipping: boolean;
}
