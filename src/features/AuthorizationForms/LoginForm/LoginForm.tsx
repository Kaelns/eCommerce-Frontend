import { useState, useCallback } from 'react';
import { Divider, Chip, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonCustom from '@/components/ButtonCustom/ButtonCustom';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import { checkCredentialInputs } from '@/features/AuthorizationForms/data/AuthorizationForms.helpers';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { handleAuthentication } from '@/services/createAuthApi';
import { ROUTES } from '@/features/Router/data/Router.enum';
import styles from './LoginForm.module.scss';
import { HandleOnChangeInput } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.types';

export default function LoginForm(): React.ReactNode {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});
  const { setAuthUserToken } = useAuthContext();

  const onSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const { email, password } = inputs;
      //  TODO remove console
      // console.log(`${email} ${password}`);

      await handleAuthentication(email, password, setAuthUserToken, setInputsError);
    },
    [inputs, setAuthUserToken]
  );

  const handleOnChangeInput: HandleOnChangeInput = useCallback(
    (checkFunction: (value: string, pattern?: RegExp) => string) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const newValue = e.target.value;
        const error = checkFunction(newValue);
        setInputsError((values) => ({ ...values, [e.target.name]: error }));
        setInputs((values) => ({ ...values, [e.target.name]: newValue }));
      },
    []
  );

  return (
    <Box component="form" className={styles.form}>
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} />
      <Box className={styles.btnContainer}>
        <ButtonCustom disabled={!checkCredentialInputs(inputs, inputsError)} onClick={onSubmit}>
          Login
        </ButtonCustom>
        <Divider>
          <Chip label="Or" size="small" />
        </Divider>
        <Button variant="contained" onClick={() => navigate(ROUTES.REGISTRATION)}>
          Register
        </Button>
      </Box>
    </Box>
  );
}
