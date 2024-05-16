import React, { useState, useCallback, FormEvent, FormEventHandler } from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import EmailInput from '@/components/ui/inputs/emailInput';
import PasswordInput from '@/components/ui/inputs/passwordInput';
import styles from '@/components/ui/forms/registration.module.scss';
import Input from '@/components/ui/inputs/input';
import checkGeneralRule from '@/features/validation/generalValidation';
import DateInput from '@/components/ui/inputs/dateInput';
import checkBirthday from '@/features/validation/birthdayValidation';
import getMinDate from '@/utils/getMinDate';
import getMaxDate from '@/utils/getMaxDate';

export default function Form(): JSX.Element {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [inputs, setInputs] = useState<{ [key: string]: string }>({ birthday: dayjs(getMaxDate()).toString() });

  /*  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());
      console.log(formObject);
      alert(formObject);
    }
  };  */
  /*  const onClick: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`${email} ${password}`);
  };  */
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`${email} ${password}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <EmailInput setValue={setEmail} />
      <PasswordInput setValue={setPassword} />
      <Input name="firstName" label="First name" validationChecks={checkGeneralRule} setInputs={setInputs} />
      <Input name="lastName" label="Last name" validationChecks={checkGeneralRule} setInputs={setInputs} />
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={dayjs(getMaxDate())}
        maxDate={dayjs(getMaxDate())}
        minDate={dayjs(getMinDate())}
        setInputs={setInputs}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
}
