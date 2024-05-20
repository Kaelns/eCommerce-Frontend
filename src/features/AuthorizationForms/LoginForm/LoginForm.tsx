import { useState, useCallback } from 'react';
import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import styles from './loginForm.module.scss';
import { checkCredentialInputs } from '@/features/AuthorizationForms/forms.helper';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

export default function LoginForm(): JSX.Element {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});
  const { authUserToken, setAuthUserToken } = useAuthContext();

  const onClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const { email, password } = inputs;
      console.log(`${email} ${password}`);

      try {
        const result = await eCommerceAPI.authenticateCustomer(email, password);
        console.log(result.body);
        setAuthUserToken('auth_is_ok');
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
        try {
          const { body } = await eCommerceAPI.returnCustomerByEmail(email);
          if (body!.results.length === 0) {
            console.log('This email address has not been registered.');
            setInputsError((prev) => ({ ...prev, email: 'This email address has not been registered.' }));
          } else {
            setInputsError((prev) => ({ ...prev, password: 'Wrong password' }));
            console.log('wrong password');
          }
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message);
          }
        }
      }
    },
    [inputs]
  );

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checkFunction: (value: string) => string) => {
      const newValue = e.target.value;
      const error = checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    []
  );

  return (
    <form className={styles.form}>
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} />
      <ButtonCustom disabled={!checkCredentialInputs(inputs, inputsError)} onClick={onClick}>
        Login
      </ButtonCustom>
    </form>
  );
}
