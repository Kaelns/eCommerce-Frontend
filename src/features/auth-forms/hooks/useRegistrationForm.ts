import type { InputReactEvent } from '@/shared/model/types/types';
import type {
  IInputsValues,
  IInputsErrors,
  PostalCodePattern,
  HandleOnChangeInput,
  HandleChangeAutocomplete
} from '@/features/AuthForms/data/AuthForms.types';

import { useState, useCallback } from 'react';

import { useAppDispatch } from '@/app/store/store';
import { createUserApi } from '@/services/model/user/createUserApi';
import { getPrefix } from '@/features/AuthForms/data/AuthForms.helpers';
import { INPUTS, AddressPrefix, AddressProperty } from '@/features/AuthForms/data/AuthForms.constants';

import { COUNTRY_LIST, MAX_DATE_DASH } from '@/shared/model/data/constants';
import checkPostalCode from '@/shared/zod/%%%BADvalidation/postalCodeValidation';

const INIT_INPUTS_DATA = {
  birthday: MAX_DATE_DASH,
  shippingCountry: COUNTRY_LIST[0].code,
  billingCountry: COUNTRY_LIST[0].code
};

const INIT_POSTAL_PATTERN = {
  shipping: undefined,
  billing: undefined
};

interface IUseRegistrationFormReturn {
  isSameAddress: boolean;
  inputsValues: IInputsValues;
  inputsErrors: IInputsErrors;
  isShowCircleProgress: boolean;
  isDefaultBillingAddress: boolean;
  isDefaultShippingAddress: boolean;
  handleToggleAsBilling: () => void;
  handleToggleDefaultBilling: () => void;
  handleToggleDefaultShipping: () => void;
  handleOnChangeInput: HandleOnChangeInput;
  handleOnChangeAutocomplete: HandleChangeAutocomplete;
  setInputsValues: React.Dispatch<React.SetStateAction<IInputsValues>>;
  setInputsErrors: React.Dispatch<React.SetStateAction<IInputsErrors>>;
  setIsDefaultBillingAddress: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDefaultShippingAddress: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
}

export const useRegistrationForm = (): IUseRegistrationFormReturn => {
  const dispatch = useAppDispatch();
  const [inputsValues, setInputsValues] = useState<IInputsValues>(INIT_INPUTS_DATA);
  const [inputsErrors, setInputsErrors] = useState<IInputsErrors>({});
  const [isShowCircleProgress, setIsShowCircleProgress] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [isDefaultBillingAddress, setIsDefaultBillingAddress] = useState(false);
  const [isDefaultShippingAddress, setIsDefaultShippingAddress] = useState(false);
  const [postalCodePattern, setPostalCodePattern] = useState<PostalCodePattern>(INIT_POSTAL_PATTERN);

  const handleOnChangeInput: HandleOnChangeInput = useCallback(
    (checkFunction: (value: string, pattern?: RegExp) => string) =>
      (e: InputReactEvent): void => {
        const newValue = e.target.value;
        const prefix = getPrefix(e.target.name);
        const error = checkFunction(newValue, prefix ? postalCodePattern[prefix] : undefined);
        setInputsErrors((values) => ({ ...values, [e.target.name]: error }));
        setInputsValues((values) => ({ ...values, [e.target.name]: newValue }));
      },
    [postalCodePattern]
  );

  const handleOnChangeAutocomplete: HandleChangeAutocomplete = useCallback(
    (event, value) => {
      if (!(event.currentTarget.parentNode instanceof HTMLElement)) {
        return;
      }
      const id = event.currentTarget.parentNode?.id;
      const prefix = getPrefix(id);
      if (!prefix) {
        return;
      }
      setPostalCodePattern((values) => ({ ...values, [prefix]: value?.postalCodePattern }));
      const postalCodeName = INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name;
      const countryName = INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name;
      const error = checkPostalCode(inputsValues[postalCodeName] ?? '', value?.postalCodePattern);
      setInputsErrors((values) => ({ ...values, [postalCodeName]: error }));
      setInputsValues((values) => ({
        ...values,
        [countryName]: value?.code ?? ''
      }));
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
      dispatch(
        createUserApi(
          inputsValues,
          setInputsErrors,
          setIsShowCircleProgress,
          isSameAddress,
          isDefaultShippingAddress,
          isDefaultBillingAddress
        )
      );
    },
    [dispatch, inputsValues, isSameAddress, isDefaultShippingAddress, isDefaultBillingAddress]
  );

  return {
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
    handleOnChangeAutocomplete,
    handleToggleDefaultBilling,
    handleToggleDefaultShipping,
    setInputsValues,
    setInputsErrors
  };
};
