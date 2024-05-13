import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import EmailInput from '@/components/ui/inputs/emailInput';
import PasswordInput from '@/components/ui/inputs/passwordInput';
import styles from '@/components/ui/forms/loginForm.module.scss';

export default function Form(): JSX.Element {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onClick = useCallback(() => {
    alert(`${email} ${password}`);
  }, [email, password]);

  return (
    <form className={styles.form}>
      <EmailInput setValue={setEmail} />
      <PasswordInput setValue={setPassword} />
      <Button variant="contained" type="submit" disabled={!(password && email)} onClick={onClick}>
        Login
      </Button>
    </form>
  );
}
