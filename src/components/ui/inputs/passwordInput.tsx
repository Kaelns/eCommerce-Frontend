import { SetStateAction, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import checkPassword from '@/features/Router/validation/passwordValidation';
import ShowPasswordIcon from '@/components/Icons/showPasswordIcon';
import styles from '@/components/ui/inputs/inputs.module.scss';

export default function PasswordInput({ setValue }: { setValue: React.Dispatch<SetStateAction<string>> }): JSX.Element {
  const [passwordMatch, setPasswordMatch] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <InputLabel className={styles.label}>Enter your password: </InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        required
        error={!!passwordMatch}
        onChange={(e) => {
          const result = checkPassword(e.target.value);
          setPasswordMatch(result);
          if (!result) {
            setValue(e.target.value);
          }
        }}
        endAdornment={<ShowPasswordIcon showPassword={showPassword} setShowPassword={setShowPassword} />}
      />
      {passwordMatch && <p className={styles.error}>{passwordMatch}</p>}
    </>
  );
}
