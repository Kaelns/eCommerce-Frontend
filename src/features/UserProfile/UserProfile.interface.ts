import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
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

export interface IUserProfilePart {
  data: IUseRegistrationFormReturn;
  setIsActualData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertData: React.Dispatch<React.SetStateAction<{ typeAlert: Alerts; textAlert: AlertsText }>>;
}

export interface IUserProfilePartWithInitial extends IUserProfilePart {
  initialValues: IResponseUserData;
}
