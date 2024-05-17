import { SetStateAction, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import checkEmail from '@/features/Router/validation/emailValidation';
import styles from '@/components/ui/inputs/inputs.module.scss';

export default function EmailInput({
  setValue,
  error,
  setError
}: {
  setValue: React.Dispatch<SetStateAction<string>>;
  error?: boolean;
  setError?: React.Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [emailMatch, setEmailMatch] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const result = checkEmail(e.target.value);
    setEmailMatch(result);

    if (setError) {
      if (!result) {
        setError(false);
        setValue(e.target.value);
      } else {
        setError(true);
      }
    }
  };
  return (
    <>
      <InputLabel className={styles.label}>Enter your email: </InputLabel>
      <OutlinedInput
        type="text"
        className={styles.input}
        required
        error={error ?? !!emailMatch}
        onChange={handleChange}
      />
      {(error ?? emailMatch) && (
        <p className={styles.error}>{emailMatch || 'This email address has not been registered.'}</p>
      )}
    </>
  );
}
