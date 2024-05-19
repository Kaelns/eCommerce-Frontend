import React, { useState, useCallback } from 'react';
import dayjs from 'dayjs';

import Input from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import styles from './registrationForm.module.scss';
import checkGeneralRule from '@/features/validation/generalValidation';
import DateInput from '@/features/AuthorizationForms/components/DateInput/DateInput';
import checkBirthday from '@/features/validation/birthdayValidation';
import getMinDate from '@/utils/getMinDate';
import getMaxDate from '@/utils/getMaxDate';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import AddressBlock from '@/features/AuthorizationForms/components/AddressBlock/AddressBlock';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { checkAllInputs } from '@/features/AuthorizationForms/forms.helper';
import OnChangeComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import { AddressPrefix } from '@/features/AuthorizationForms/data/addressPrefix.enum';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';

export default function RegistrationForm(): JSX.Element {
  const [inputsValues, setInputs] = useState<IInputsValues>({ birthday: dayjs(getMaxDate()).toString() });
  const [inputsErrors, setInputsError] = useState<IInputsErrors>({});

  const [postalCodePattern, setPostalCodePattern] = useState<{ [key in AddressPrefix]: RegExp | undefined }>({
    shipping: undefined,
    billing: undefined
  });

  const handleOnChangeInput = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      checkFunction: (value: string, pattern?: RegExp) => string
    ) => {
      const newValue = e.target.value;

      const prefix = e.target.name.match(AddressPrefix.BILLING) ?? e.target.name.match(AddressPrefix.SHIPPING);

      const error = prefix
        ? checkFunction(newValue, postalCodePattern[prefix[0] as AddressPrefix])
        : checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
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
          setInputsError((values) => ({ ...values, [INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name]: error }));
          setInputs((values) => ({
            ...values,
            [INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name]: value?.code ?? ''
          }));
        }
      }
    },
    [inputsValues]
  );

  const onClick = useCallback(() => {
    console.log(inputsValues);
    alert(`${inputsValues.email} ${inputsValues.password}`);
  }, [inputsValues]);

  return (
    <form className={styles.form}>
      <Input
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleOnChangeInput(event, checkGeneralRule)
        }
      >
        {inputsErrors[INPUTS.firstName.name] && <p className={styles.error}>{inputsErrors[INPUTS.firstName.name]}</p>}
      </Input>
      <Input
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleOnChangeInput(event, checkGeneralRule)
        }
      >
        {inputsErrors[INPUTS.lastName.name] && <p className={styles.error}>{inputsErrors[INPUTS.lastName.name]}</p>}
      </Input>
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={dayjs(getMaxDate())}
        maxDate={dayjs(getMaxDate())}
        minDate={dayjs(getMinDate())}
        setInputs={setInputs}
      />
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsErrors} />
      <h3>Shipping Address</h3>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsErrors={inputsErrors}
        prefix={AddressPrefix.SHIPPING}
      />
      <h3>Billing Address</h3>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsErrors={inputsErrors}
        prefix={AddressPrefix.BILLING}
      />
      <ButtonCustom disabled={!checkAllInputs(inputsValues, inputsErrors)} onClick={onClick}>
        Register
      </ButtonCustom>
    </form>
  );
}
