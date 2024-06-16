import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses, IUserProfilePart } from '@/features/UserProfile/UserProfile.interface';

export interface IAddressPart extends IUserProfilePart {
  addresses: IAddresses[];
  version: number;
}

interface IAddress {
  data: IUseRegistrationFormReturn;
  isShipping: boolean;
  isBilling: boolean;
  handleToggleBilling: () => void;
  handleToggleShipping: () => void;
  address?: IAddresses;
}

export interface IAddressWithDisabled extends IAddress {
  disabled: boolean;
}

export interface IAddressWithSaveAndCancel extends IAddress {
  handleSave: () => void;
  handleCancel: () => void;
}

export interface IUseAddressPartReturn {
  updateId: number;
  isShippingAddress: boolean;
  isBillingAddress: boolean;
  isAddMode: boolean;
  handleToggleBilling: () => void;
  handleToggleShipping: () => void;
  handleSaveUpdate: () => void;
  handleCancelUpdate: () => void;
  handleUpdate: (index: number) => () => void;
  handleSaveAdd: () => void;
  handleCancelAdd: () => void;
  handleAddNew: () => void;
  handleDelete: (index: number) => () => Promise<void>;
}
