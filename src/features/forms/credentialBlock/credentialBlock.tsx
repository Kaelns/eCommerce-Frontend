import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Input from '@/components/ui/inputs/input';
import { INPUTS } from '@/features/forms/forms.constants';
import { InputType } from '@/components/ui/inputs/input.constants';
import ShowPasswordButton from '@/features/forms/showPasswordButton';
import checkEmail from '@/features/validation/emailValidation';
import checkPassword from '@/features/validation/passwordValidation';
import IFormsBlock from '@/data/interface/IFormsBlock.interface';
import styles from '@/features/forms/forms.module.scss';

export default function CredentialBlock({ onChangeFunction, inputsError }: IFormsBlock): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        label={INPUTS.email.label}
        name={INPUTS.email.name}
        onChange={(event) => onChangeFunction(event, checkEmail)}
        error={!!inputsError[INPUTS.email.name]}
      >
        {inputsError[INPUTS.email.name] && <p className={styles.error}>{inputsError[INPUTS.email.name]}</p>}
      </Input>
      <Input
        type={showPassword ? InputType.TEXT : InputType.PASSWORD}
        label={INPUTS.password.label}
        name={INPUTS.password.name}
        onChange={(event) => onChangeFunction(event, checkPassword)}
        error={!!inputsError[INPUTS.password.name]}
        endAdornment={
          <ShowPasswordButton setShowPassword={setShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </ShowPasswordButton>
        }
      >
        {inputsError[INPUTS.password.name] && <p className={styles.error}>{inputsError[INPUTS.password.name]}</p>}
      </Input>
    </>
  );
}
