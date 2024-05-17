import styles from './RegistrationPage.module.scss';
import Form from '@/components/ui/forms/loginForm';

// interface IProps {}

export function RegistrationPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.login}>
      <h2>Register Page</h2>
      <Form />
    </div>
  );
}
