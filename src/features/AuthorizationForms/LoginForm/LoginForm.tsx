import { useState, useCallback } from 'react';
import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import styles from './loginForm.module.scss';
import { checkCredentialInputs } from '@/features/AuthorizationForms/forms.helper';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { handleAuthentication } from '@/utils/createAuthApi';

export default function LoginForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});
  const { setAuthUserToken } = useAuthContext();

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const { email, password } = inputs;
      console.log(`${email} ${password}`);

      await handleAuthentication(email, password, setAuthUserToken, setInputsError);
    },
    [inputs]
  );

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
