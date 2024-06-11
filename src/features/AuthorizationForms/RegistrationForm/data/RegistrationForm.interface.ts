import { SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { HandleOnChangeInput } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';
import { OnChangeComboBox } from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import { IInputsValues, IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

interface IAlertData {
  typeAlert: Alerts;
  textAlert: AlertsText;
}

interface IUseRegistrationFormReturn {
  maxDate: Dayjs;
  minDate: Dayjs;
  alertData: IAlertData;
  inputsValues: IInputsValues;
  inputsErrors: IInputsErrors;
  isShowAlert: boolean;
  isSameAddress: boolean;
  isShowCircleProgress: boolean;
  isDefaultBillingAddress: boolean;
  isDefaultShippingAddress: boolean;
  setIsDefaultBillingAddress: React.Dispatch<SetStateAction<boolean>>;
  setIsDefaultShippingAddress: React.Dispatch<SetStateAction<boolean>>;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
  handleBackdrop: () => void;
  handleOnChangeInput: HandleOnChangeInput;
  handleToggleAsBilling: () => void;
  handleOnChangeComboBox: OnChangeComboBox;
  handleToggleDefaultBilling: () => void;
  handleToggleDefaultShipping: () => void;
  setInputsValues: React.Dispatch<SetStateAction<IInputsValues>>;
  setInputsErrors: React.Dispatch<SetStateAction<IInputsErrors>>;
}

export type { IAlertData, IUseRegistrationFormReturn };
