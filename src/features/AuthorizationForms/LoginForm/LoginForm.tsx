import { useState, useCallback } from 'react';

import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import styles from './loginForm.module.scss';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import { checkCredentialInputs } from '@/features/AuthorizationForms/forms.helper';

export default function LoginForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});

  const onClick = useCallback(() => {
    console.log(inputs);
    alert(`${inputs.email} ${inputs.password}`);
  }, [inputs]);

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checkFunction: (value: string) => string) => {
      const newValue = e.target.value;
      const error = checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    []
  );

  return (
    <form className={styles.form}>
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} />
      <ButtonCustom disabled={!checkCredentialInputs(inputs, inputsError)} onClick={onClick}>
        Login
      </ButtonCustom>
    </form>
  );
}
