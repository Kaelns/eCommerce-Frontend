import styles from './LoginPage.module.scss';
import LoginForm from '@/features/forms/loginForm/loginForm';

// interface IProps {}

export function LoginPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.login}>
      <h2>Login Page</h2>
      <LoginForm />
    </div>
  );
}
