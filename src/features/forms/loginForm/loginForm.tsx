import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import styles from '@/features/forms/loginForm/loginForm.module.scss';
import CredentialBlock from '@/features/forms/credentialBlock/credentialBlock';
import { checkCredentialInputs } from '@/features/forms/forms.helper';

export default function LoginForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});

  const onClick = useCallback(() => {
    console.log(inputs);
    alert(`${inputs.email} ${inputs.password}`);
  }, [inputs.email, inputs.password]);

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
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsError={inputsError} />
      <Button
        variant="contained"
        type="submit"
        disabled={!checkCredentialInputs(inputs, inputsError)}
        onClick={onClick}
      >
        Login
      </Button>
    </form>
  );
}
