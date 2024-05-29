import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import { useState } from 'react';
import ICredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock.interface';
import checkEmail from '@/features/validation/emailValidation';
import checkPassword from '@/features/validation/passwordValidation';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/validationInput.enum';
import { ShowPasswordBtn } from '@/features/AuthorizationForms/components/ShowPasswordBtn';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';

export default function CredentialBlock({ onChangeFunction, inputsErrors }: ICredentialBlock): React.ReactNode {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ValidationInput
        label={INPUTS.email.label}
        name={INPUTS.email.name}
        onChange={(event) => onChangeFunction(event, checkEmail)}
        error={!!inputsErrors[INPUTS.email.name]}
      >
        <FormHelperText error>{inputsErrors[INPUTS.email.name] && inputsErrors[INPUTS.email.name]}</FormHelperText>
      </ValidationInput>
      <ValidationInput
        type={showPassword ? InputType.TEXT : InputType.PASSWORD}
        label={INPUTS.password.label}
        name={INPUTS.password.name}
        onChange={(event) => onChangeFunction(event, checkPassword)}
        error={!!inputsErrors[INPUTS.password.name]}
        endAdornment={
          <ShowPasswordBtn setShowPassword={setShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ShowPasswordBtn>
        }
      >
        <FormHelperText error>
          {inputsErrors[INPUTS.password.name] && inputsErrors[INPUTS.password.name]}
        </FormHelperText>
      </ValidationInput>
    </>
  );
}
