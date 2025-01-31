import type { IInputsErrors, HandleOnChangeInput } from '@/features/AuthForms/data/AuthForms.types';

import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { INPUTS } from '@/features/AuthForms/data/AuthForms.constants';
import { ValidationInput } from '@/features/AuthForms/components/ValidationInput';

import checkEmail from '@/shared/zod/%%%BADvalidation/emailValidation';
import checkPassword from '@/shared/zod/%%%BADvalidation/passwordValidation';

interface ILoginBlock {
  inputsErrors: IInputsErrors;
  onChangeFunction: HandleOnChangeInput;
}

export function LoginBlock({ onChangeFunction, inputsErrors }: ILoginBlock): React.ReactNode {
  const [showPassword, setShowPassword] = useState(false);

  const isEmailError = !!inputsErrors[INPUTS.email.name];
  const isPasswordError = !!inputsErrors[INPUTS.password.name];
  const handleShowPassword = (): void => setShowPassword((value) => !value);

  return (
    <>
      <ValidationInput label={INPUTS.email.label} name={INPUTS.email.name} onChange={onChangeFunction(checkEmail)} error={isEmailError}>
        {isEmailError && inputsErrors[INPUTS.email.name]}
      </ValidationInput>
      <ValidationInput
        type={showPassword ? 'text' : 'password'}
        label={INPUTS.password.label}
        name={INPUTS.password.name}
        onChange={onChangeFunction(checkPassword)}
        error={isPasswordError}
        endAdornment={
          <InputAdornment position="end" component={IconButton} onClick={handleShowPassword} edge="end">
            {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
          </InputAdornment>
        }
      >
        {isPasswordError && inputsErrors[INPUTS.password.name]}
      </ValidationInput>
    </>
  );
}
