import React, { useState, useCallback } from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';

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

export default function RegistrationForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({ birthday: dayjs(getMaxDate()).toString() });
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checkFunction: (value: string) => string) => {
      const newValue = e.target.value;
      const error = checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    []
  );

  const handleOnChangeComboBox: OnChangeComboBox = useCallback((event, value) => {
    console.log(value);
    setInputs((values) => ({ ...values, [INPUTS.country.name]: value?.code ?? '' }));
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`Send`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      />
      <h3>BillingAddress</h3>
      <Button variant="contained" type="submit" disabled={!checkAllInputs(inputs, inputsError)}>
        Register
      </Button>
    </form>
  );
}
