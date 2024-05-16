import { useState, SetStateAction } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
import styles from '@/components/ui/inputs/inputs.module.scss';

export default function Input({
  label,
  name,
  validationChecks,
  setInputs
}: {
  name: string;
  label: string;
  validationChecks: (value: string) => string;
  setInputs: React.Dispatch<SetStateAction<{ [key: string]: string }>>;
}): JSX.Element {
  const [valueMatch, setValueMatch] = useState('');
  return (
    <>
      <InputLabel className={styles.label}>{label}: </InputLabel>
      <OutlinedInput
        name={name}
        type="text"
        className={styles.input}
        required
        error={!!valueMatch}
        onChange={(e) => {
          const newValue = e.target.value;
          const result = validationChecks(newValue);
          setValueMatch(result);
          console.log(newValue);
          setInputs((values) => ({ ...values, [e.target.name]: newValue }));
        }}
      />
      {valueMatch && <p className={styles.error}>{valueMatch}</p>}
    </>
  );
}
