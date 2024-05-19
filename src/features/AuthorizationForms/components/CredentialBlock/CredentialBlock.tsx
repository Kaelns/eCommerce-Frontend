import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import { useState } from 'react';
import ICredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/ICredentialBlock.interface';
import Input from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import ShowPasswordButton from '@/features/AuthorizationForms/components/showPasswordButton';
import checkEmail from '@/features/validation/emailValidation';
import checkPassword from '@/features/validation/passwordValidation';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/validationInput.enum';

export default function CredentialBlock({ onChangeFunction, inputsErrors }: ICredentialBlock): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        label={INPUTS.email.label}
        name={INPUTS.email.name}
        onChange={(event) => onChangeFunction(event, checkEmail)}
        error={!!inputsErrors[INPUTS.email.name]}
      >
        <FormHelperText error>{inputsErrors[INPUTS.email.name] && inputsErrors[INPUTS.email.name]}</FormHelperText>
      </Input>
      <Input
        type={showPassword ? InputType.TEXT : InputType.PASSWORD}
        label={INPUTS.password.label}
        name={INPUTS.password.name}
        onChange={(event) => onChangeFunction(event, checkPassword)}
        error={!!inputsErrors[INPUTS.password.name]}
        endAdornment={
          <ShowPasswordButton setShowPassword={setShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ShowPasswordButton>
        }
      >
        <FormHelperText error>
          {inputsErrors[INPUTS.password.name] && inputsErrors[INPUTS.password.name]}
        </FormHelperText>
      </Input>
    </>
  );
}
