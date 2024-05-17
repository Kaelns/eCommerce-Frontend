import { SetStateAction, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import checkPassword from '@/features/Router/validation/passwordValidation';
import ShowPasswordIcon from '@/components/Icons/showPasswordIcon';
import styles from '@/components/ui/inputs/inputs.module.scss';

export default function PasswordInput({
  setValue,
  error,
  setError
}: {
  setValue: React.Dispatch<SetStateAction<string>>;
  error?: boolean;
  setError?: React.Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [passwordMatch, setPasswordMatch] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const result = checkPassword(e.target.value);
    setPasswordMatch(result);

    if (setError) {
      if (!result) {
        setValue(e.target.value);
        setError(false);
      } else {
        setError(true);
      }
    }
  };
  return (
    <>
      <InputLabel className={styles.label}>Enter your password: </InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        required
        error={error ?? !!passwordMatch}
        onChange={handleChange}
        endAdornment={<ShowPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} />}
      />
      {(error ?? passwordMatch) && <p className={styles.error}>{passwordMatch || 'Wrong password'}</p>}
    </>
  );
}
