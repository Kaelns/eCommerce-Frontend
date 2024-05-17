import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import EmailInput from '@/components/ui/inputs/emailInput';
import PasswordInput from '@/components/ui/inputs/passwordInput';
import styles from '@/components/ui/forms/loginForm.module.scss';
import { authenticateCustomer, returnCustomerByEmail } from '@/services/ApiFunctions';

export default function Form(): JSX.Element {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const onClick = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      // console.log(`${email} ${password}`);
      returnCustomerByEmail(email)
        .then(({ body }) => {
          if (body!.results.length === 0) {
            console.log('This email address has not been registered.');
            setWrongEmail(true);
          } else {
            authenticateCustomer(email, password)
              .then((result) => {
                console.log(result.body);
                console.log('login ok');
              })
              .catch((error) => {
                console.log(error.message);
                setWrongPassword(true);
                console.log('wrong password');
              });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    [email, password]
  );

  return (
    <form className={styles.form}>
      <EmailInput setValue={setEmail} error={wrongEmail} setError={setWrongEmail} />
      <PasswordInput setValue={setPassword} error={wrongPassword} setError={setWrongPassword} />
      <Button variant="contained" type="submit" disabled={!(password && email)} onClick={onClick}>
        Login
      </Button>
    </form>
  );
}
