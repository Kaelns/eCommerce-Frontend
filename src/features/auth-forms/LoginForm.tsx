import { Stack } from '@mui/system';
import { Chip, Button, Divider } from '@mui/material';

import { ContainedBtn } from '@/shared/ui/elements/buttons/ContainedBtn';

export function LoginForm() {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const { showAlert } = useAlert();
  // const [inputs, setInputs] = useState<Record<string, string>>({});
  // const [inputsError, setInputsError] = useState<{ [key: string]: string }>({});

  // const navigateToRegistrationPage = () => navigate(Paths.REGISTRATION);

  // const reportError = useCallback((reason: 'email' | 'password', message: string): void => {
  //   setInputsError((prev) => ({ ...prev, [reason]: message }));
  // }, []);

  // const handleLoginSubmit = useCallback(
  //   async (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  // const { email, password } = inputs;
  // const tokenStore = await authUserApi(email, password, reportError);
  // if (tokenStore) {
  //   const { token, refreshToken } = tokenStore;
  //   dispatch(loginAuthAction({ authToken: token, refreshAuthToken: refreshToken ?? '' }));
  //   showAlert(AlertAPIText.LOGIN_SUCCESS);
  // } else {
  //   showAlert(AlertAPIText.LOGIN_ERROR);
  // }
  //   },
  //   [dispatch, inputs, reportError, showAlert]
  // );

  // const handleOnChangeInput: HandleOnChangeInput = useCallback(
  //   (checkFunction: (value: string, pattern?: RegExp) => string) =>
  //     (e: InputReactEvent): void => {
  //       const newValue = e.target.value;
  //       const error = checkFunction(newValue);
  //       setInputsError((values) => ({ ...values, [e.target.name]: error }));
  //       setInputs((values) => ({ ...values, [e.target.name]: newValue }));
  //     },
  //   []
  // );

  return (
    <Stack component="form" gap={1} width={{ zero: '100%', tablet: '50%' }}>
      {/* <LoginBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsError} /> */}
      <Stack gap={1.5}>
        <ContainedBtn type="submit" /* disabled={!checkCredentialInputs(inputs, inputsError)} onClick={handleLoginSubmit} */>
          Login
        </ContainedBtn>
        <Divider>
          <Chip label="Or" size="small" />
        </Divider>
        <Button variant="contained" /* onClick={navigateToRegistrationPage} */>Register</Button>
      </Stack>
    </Stack>
  );
}
