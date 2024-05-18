import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Input from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/validationInput.enum';
import ShowPasswordButton from '@/features/AuthorizationForms/components/showPasswordButton';
import checkEmail from '@/features/validation/emailValidation';
import checkPassword from '@/features/validation/passwordValidation';
import ICredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/ICredentialBlock.interface';
import styles from '../../forms.module.scss';

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
        {inputsErrors[INPUTS.email.name] && <p className={styles.error}>{inputsErrors[INPUTS.email.name]}</p>}
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
        {inputsErrors[INPUTS.password.name] && <p className={styles.error}>{inputsErrors[INPUTS.password.name]}</p>}
      </Input>
    </>
  );
}
