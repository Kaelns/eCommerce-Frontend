import { useState, useCallback } from 'react';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { createCustomer } from '@/services/createCustomerApi';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { OnChangeComboBox } from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import { IInputsValues, IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';
import { AddressPrefix, AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import {
  IAlertData,
  IUseRegistrationFormReturn
} from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import {
  INIT_INPUTS_DATA,
  INIT_ALERT_DATA,
  INIT_POSTAL_PATTERN
} from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.constants';
import {
  PostalCodePattern,
  HandleOnChangeInput
} from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';

export const useRegistrationForm = (): IUseRegistrationFormReturn => {
  const { setAuthUserToken } = useAuthContext();

  const [inputsValues, setInputsValues] = useState<IInputsValues>(INIT_INPUTS_DATA);
  const [inputsErrors, setInputsErrors] = useState<IInputsErrors>({});
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [isShowCircleProgress, setIsShowCircleProgress] = useState(true);
  const [isDefaultBillingAddress, setIsDefaultBillingAddress] = useState(false);
  const [isDefaultShippingAddress, setIsDefaultShippingAddress] = useState(false);
  const [alertData, setAlertData] = useState<IAlertData>(INIT_ALERT_DATA);
  const [postalCodePattern, setPostalCodePattern] = useState<PostalCodePattern>(INIT_POSTAL_PATTERN);

  const handleOnChangeInput: HandleOnChangeInput = useCallback(
    (checkFunction: (value: string, pattern?: RegExp) => string) =>
      (e: InputReactEvent): void => {
        const newValue = e.target.value;
        const prefix = e.target.name.match(AddressPrefix.BILLING) ?? e.target.name.match(AddressPrefix.SHIPPING);
        const error = checkFunction(newValue, prefix ? postalCodePattern[prefix[0] as AddressPrefix] : undefined);
        setInputsErrors((values) => ({ ...values, [e.target.name]: error }));
        setInputsValues((values) => ({ ...values, [e.target.name]: newValue }));
      },
    [postalCodePattern]
  );

  const handleOnChangeComboBox: OnChangeComboBox = useCallback(
    (event, value) => {
      if (event.currentTarget.parentNode instanceof HTMLElement) {
        const id = event.currentTarget.parentNode?.id;
        const matchPrefix = id.match(AddressPrefix.BILLING) ?? id.match(AddressPrefix.SHIPPING);
        if (matchPrefix) {
          const prefix = matchPrefix[0] as AddressPrefix;
          setPostalCodePattern((values) => ({ ...values, [prefix]: value?.postalCodePattern }));
          const error = checkPostalCode(
            inputsValues[INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name] ?? '',
            value?.postalCodePattern
          );
          setInputsErrors((values) => ({ ...values, [INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name]: error }));
          setInputsValues((values) => ({
            ...values,
            [INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name]: value?.code ?? ''
          }));
        }
      }
    },
    [inputsValues]
  );

  const handleToggleAsBilling = useCallback(() => {
    if (!isSameAddress) {
      const addressProperty = Object.values(AddressProperty);
      for (const value of addressProperty) {
        setInputsValues((values) => ({ ...values, [INPUTS[`${AddressPrefix.BILLING}${value}`].name]: '' }));
        setInputsErrors((values) => ({ ...values, [INPUTS[`${AddressPrefix.BILLING}${value}`].name]: '' }));
      }
    }
    setIsSameAddress((value) => !value);
  }, [isSameAddress]);

  const handleToggleDefaultBilling = (): void => {
    setIsDefaultBillingAddress((value) => !value);
  };

  const handleToggleDefaultShipping = (): void => {
    setIsDefaultShippingAddress((value) => !value);
  };

  const handleBackdrop = (): void => {
    setIsShowAlert(false);
    setIsShowCircleProgress(true);
  };

  const handleSubmit = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await createCustomer(
        inputsValues,
        setAuthUserToken,
        setInputsErrors,
        setIsShowAlert,
        setIsShowCircleProgress,
        setAlertData,
        isSameAddress,
        isDefaultShippingAddress,
        isDefaultBillingAddress
      );
    },
    [inputsValues, setAuthUserToken, isSameAddress, isDefaultShippingAddress, isDefaultBillingAddress]
  );

  return {
    alertData,
    isShowAlert,
    inputsValues,
    inputsErrors,
    isSameAddress,
    isShowCircleProgress,
    isDefaultBillingAddress,
    isDefaultShippingAddress,
    handleSubmit,
    handleBackdrop,
    handleOnChangeInput,
    handleToggleAsBilling,
    handleOnChangeComboBox,
    handleToggleDefaultBilling,
    handleToggleDefaultShipping,
    setInputsValues
  };
};
