import { SetStateAction, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import checkEmail from '@/features/Router/validation/emailValidation';
import styles from '@/components/ui/inputs/inputs.module.scss';

export default function EmailInput({ setValue }: { setValue: React.Dispatch<SetStateAction<string>> }): JSX.Element {
  const [emailMatch, setEmailMatch] = useState('');
  return (
    <>
      <InputLabel className={styles.label}>Enter your email: </InputLabel>
      <OutlinedInput
        type="text"
        className={styles.input}
        required
        error={!!emailMatch}
        onChange={(e) => {
          const result = checkEmail(e.target.value);
          setEmailMatch(result);
          if (!result) {
            setValue(e.target.value);
          }
        }}
      />
      {emailMatch && <p className={styles.error}>{emailMatch}</p>}
    </>
  );
}
