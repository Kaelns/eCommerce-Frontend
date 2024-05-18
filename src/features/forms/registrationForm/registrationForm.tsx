import React, { useState, useCallback } from 'react';
import dayjs from 'dayjs';

import Input from '@/components/ui/inputs/input';
import styles from '@/features/forms/registrationForm/registrationForm.module.scss';
import checkGeneralRule from '@/features/validation/generalValidation';
import DateInput from '@/components/ui/inputs/dateInput/dateInput';
import checkBirthday from '@/features/validation/birthdayValidation';
import getMinDate from '@/utils/getMinDate';
import getMaxDate from '@/utils/getMaxDate';
import CredentialBlock from '@/features/forms/credentialBlock/credentialBlock';
import AddressBlock from '@/features/forms/addressBlock/addressBlock';
import { INPUTS } from '@/features/forms/forms.constants';
import { checkAllInputs } from '@/features/forms/forms.helper';
import OnChangeComboBox from '@/data/types/ComboBoxFunction';
import ButtonCustom from '@/components/ui/button/button';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import { AddressPrefix } from '@/data/enum/addressPrefix.enum';

export default function RegistrationForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({ birthday: dayjs(getMaxDate()).toString() });
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});
  const [postalCodePattern, setPostalCodePattern] = useState<{ [key: string]: RegExp | undefined }>({});

  const handleOnChangeInput = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      checkFunction: (value: string, pattern?: RegExp) => string
    ) => {
      const newValue = e.target.value;

      let error = '';
      const prefix = e.target.name.match(AddressPrefix.BILLING) ?? e.target.name.match(AddressPrefix.SHIPPING);
      if (prefix) {
        error = checkFunction(newValue, postalCodePattern[prefix[0]]);
      } else {
        error = checkFunction(newValue);
      }
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    [inputs, postalCodePattern, inputsError]
  );

  const handleOnChangeComboBox: OnChangeComboBox = useCallback(
    (event, value) => {
      if (event.currentTarget.parentNode instanceof HTMLElement) {
        const id = event.currentTarget.parentNode?.id;
        const matchPrefix = id.match(AddressPrefix.BILLING) ?? id.match(AddressPrefix.SHIPPING);
        if (matchPrefix) {
          const prefix = matchPrefix[0] as AddressPrefix;
          setPostalCodePattern((values) => ({ ...values, [prefix]: value?.postalCodePattern }));
          const error = checkPostalCode(inputs[INPUTS[prefix].postalCode.name], value?.postalCodePattern);
          setInputsError((values) => ({ ...values, [INPUTS[prefix].postalCode.name]: error }));
          setInputs((values) => ({ ...values, [INPUTS[prefix].country.name]: value?.code ?? '' }));
        }
      }
    },
    [inputs, postalCodePattern, inputsError]
  );

  const onClick = useCallback(() => {
    console.log(inputs);
    alert(`${inputs.email} ${inputs.password}`);
  }, []);

  return (
    <form className={styles.form}>
      <Input
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        onChange={(event) => handleOnChangeInput(event, checkGeneralRule)}
      >
        {inputsError[INPUTS.firstName.name] && <p className={styles.error}>{inputsError[INPUTS.firstName.name]}</p>}
      </Input>
      <Input
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        onChange={(event) => handleOnChangeInput(event, checkGeneralRule)}
      >
        {inputsError[INPUTS.lastName.name] && <p className={styles.error}>{inputsError[INPUTS.lastName.name]}</p>}
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
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsError={inputsError} />
      <h3>Shipping Address</h3>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsError={inputsError}
        prefix={AddressPrefix.SHIPPING}
      />
      <h3>Billing Address</h3>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsError={inputsError}
        prefix={AddressPrefix.BILLING}
      />
      <ButtonCustom disabled={!checkAllInputs(inputs, inputsError)} onClick={onClick}>
        Register
      </ButtonCustom>
    </form>
  );
}
