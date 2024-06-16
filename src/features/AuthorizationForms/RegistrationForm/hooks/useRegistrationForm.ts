import { useState, useCallback, useMemo, useContext } from 'react';
import dayjs from 'dayjs';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { createCustomer } from '@/services/createCustomerApi';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { OnChangeComboBox } from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import { IInputsValues, IInputsErrors } from '@/features/AuthorizationForms/data/AuthorizationForms.types';
import { AddressPrefix, AddressProperty } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import {
  INIT_INPUTS_DATA,
  INIT_POSTAL_PATTERN
} from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.constants';
import {
  PostalCodePattern,
  HandleOnChangeInput
} from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';
import { InputReactEvent } from '@/data/types/InputReactEvent';
import { handlePrefix } from '@/utils/handlePrefix';
import getMaxDate from '@/utils/getMaxDate';
import getMinDate from '@/utils/getMinDate';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';

export const useRegistrationForm = (): IUseRegistrationFormReturn => {
  const { setAuthUserToken } = useAuthContext();
  const maxDate = useMemo(() => dayjs(getMaxDate()), []);
  const minDate = useMemo(() => dayjs(getMinDate()), []);

  const { handleOpenAlert } = useContext(AlertTextContext);
  const [inputsValues, setInputsValues] = useState<IInputsValues>(INIT_INPUTS_DATA);
  const [inputsErrors, setInputsErrors] = useState<IInputsErrors>({});
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [isShowCircleProgress, setIsShowCircleProgress] = useState(false);
  const [isDefaultBillingAddress, setIsDefaultBillingAddress] = useState(false);
  const [isDefaultShippingAddress, setIsDefaultShippingAddress] = useState(false);
  const [postalCodePattern, setPostalCodePattern] = useState<PostalCodePattern>(INIT_POSTAL_PATTERN);

  const handleOnChangeInput: HandleOnChangeInput = useCallback(
    (checkFunction: (value: string, pattern?: RegExp) => string) =>
      (e: InputReactEvent): void => {
        const newValue = e.target.value;
        const prefix = handlePrefix(e.target.name);
        const error = checkFunction(newValue, prefix ? postalCodePattern[prefix] : undefined);
        setInputsErrors((values) => ({ ...values, [e.target.name]: error }));
        setInputsValues((values) => ({ ...values, [e.target.name]: newValue }));
      },
    [postalCodePattern]
  );

  const handleOnChangeComboBox: OnChangeComboBox = useCallback(
    (event, value) => {
      if (event.currentTarget.parentNode instanceof HTMLElement) {
        const id = event.currentTarget.parentNode?.id;
        const prefix = handlePrefix(id);
        if (prefix) {
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

  const handleSubmit = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await createCustomer(
        inputsValues,
        setAuthUserToken,
        setInputsErrors,
        setIsShowCircleProgress,
        handleOpenAlert,
        isSameAddress,
        isDefaultShippingAddress,
        isDefaultBillingAddress
      );
    },
    [inputsValues, setAuthUserToken, handleOpenAlert, isSameAddress, isDefaultShippingAddress, isDefaultBillingAddress]
  );

  return {
    maxDate,
    minDate,
    inputsValues,
    inputsErrors,
    isSameAddress,
    isShowCircleProgress,
    isDefaultBillingAddress,
    isDefaultShippingAddress,
    setIsDefaultBillingAddress,
    setIsDefaultShippingAddress,
    handleSubmit,
    handleOnChangeInput,
    handleToggleAsBilling,
    handleOnChangeComboBox,
    handleToggleDefaultBilling,
    handleToggleDefaultShipping,
    setInputsValues,
    setInputsErrors
  };
};
