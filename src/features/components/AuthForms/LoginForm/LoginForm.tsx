import { useState, useCallback } from 'react';
import { Divider, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { BtnContained } from '@/components/buttons/BtnContained';
import { LoginBlock } from '@/features/AuthForms/components/LoginBlock';
import { checkCredentialInputs } from '@/features/AuthForms/data/AuthForms.helpers';
import { Paths, AlertsAPIText } from '@/shared/constants';
import type { InputReactEvent } from '@/shared/types';
import type { HandleOnChangeInput } from '@/features/AuthForms/data/AuthForms.types';
import { useAlertText } from '@/features/AlertText/useAlertText';
import { authUserApi } from '@/services/model/user/authUserApi';
import { useAppDispatch } from '@/store/redux';
import { loginAuthAction } from '@/store/slices/auth.slice';

export function LoginForm(): React.ReactNode {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showAlert } = useAlertText();
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});

  const navigateToRegistrationPage = (): void => navigate(Paths.REGISTRATION);

  const reportError = useCallback((reason: 'email' | 'password', message: string): void => {
    setInputsError((prev) => ({ ...prev, [reason]: message }));
  }, []);

  const handleLoginSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { email, password } = inputs;
      const tokenStore = await authUserApi(email, password, reportError);
      if (tokenStore) {
        const { token, refreshToken } = tokenStore;
        dispatch(loginAuthAction({ authToken: token, refreshAuthToken: refreshToken ?? '' }));
        showAlert(AlertsAPIText.LOGIN_SUCCESS);
      } else {
        showAlert(AlertsAPIText.LOGIN_ERROR);
      }
    },
    [dispatch, inputs, reportError, showAlert]
  );

  const handleOnChangeInput: HandleOnChangeInput = useCallback(
    (checkFunction: (value: string, pattern?: RegExp) => string) =>
      (e: InputReactEvent): void => {
        const newValue = e.target.value;
        const error = checkFunction(newValue);
        setInputsError((values) => ({ ...values, [e.target.name]: error }));
        setInputs((values) => ({ ...values, [e.target.name]: newValue }));
      },
    []
  );

  return (
    <Stack component="form" gap={1} width={{ zero: '100%', tablet: '50%' }}>
      <LoginBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} />
      <Stack gap={1.5}>
        <BtnContained type="submit" disabled={!checkCredentialInputs(inputs, inputsError)} onClick={handleLoginSubmit}>
          Login
        </BtnContained>
        <Divider>
          <Chip label="Or" size="small" />
        </Divider>
        <Button variant="contained" onClick={navigateToRegistrationPage}>
          Register
        </Button>
      </Stack>
    </Stack>
  );
}
