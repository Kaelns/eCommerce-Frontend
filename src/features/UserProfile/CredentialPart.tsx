import { Button, FormHelperText } from '@mui/material';
import { useCallback, useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { MyCustomerChangePassword, MyCustomerUpdate } from '@commercetools/platform-sdk';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import checkEmail from '@/features/validation/emailValidation';
import styles from './UserProfile.module.scss';
import { ShowPasswordBtn } from '@/features/AuthorizationForms/components/ShowPasswordBtn/ShowPasswordBtn';
import { InputType } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput.enums';
import checkPassword from '@/features/validation/passwordValidation';
import { CURRENT_PASSWORD, EMAIL_LABEL, NEW_PASSWORD } from '@/features/UserProfile/UserProfile.constants';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IResponseUserData } from '@/features/UserProfile/UserProfile.interface';
import { Title } from '@/components/typography/Title/Title';
import { Alerts, AlertsText } from '@/data/enum/alerts.enum';

export default function CredentialPart({
  data,
  initialValues,
  setIsActualData,
  setIsShowAlert,
  setIsShowCircleProgress,
  setAlertData
}: {
  data: IUseRegistrationFormReturn;
  initialValues: IResponseUserData;
  setIsActualData: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertData: React.Dispatch<React.SetStateAction<{ typeAlert: Alerts; textAlert: AlertsText }>>;
}): React.ReactNode {
  const [isChangeMode, setIsChangeMode] = useState(false);
  const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleEditMode = useCallback(() => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.email.name]: initialValues.email
    }));
    setIsChangeMode((value) => !value);
  }, [initialValues, data]);

  const handleClickSaveBtn = useCallback(async () => {
    setIsShowAlert(true);
    try {
      const localToken = localStorage.getItem('Token');
      if (localToken !== '') {
        const userData: MyCustomerUpdate = {
          version: initialValues.version,
          actions: [
            {
              action: 'changeEmail',
              email: data.inputsValues[INPUTS.email.name]!
            }
          ]
        };
        await eCommerceAPI.updateUser(localToken as string, userData).then(() => {
          setIsShowCircleProgress(false);
          setAlertData({
            typeAlert: Alerts.SUCCESS,
            textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
          });
          setIsChangeMode(false);
          setIsActualData(false);
        });
      }
    } catch (error) {
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.ERROR,
        textAlert: AlertsText.ERROR_UPDATE_USER
      });
      console.error('Error update user email:', error);
    }
  }, [
    data.inputsValues,
    initialValues.version,
    setAlertData,
    setIsActualData,
    setIsShowAlert,
    setIsShowCircleProgress
  ]);

  const handleClickCancelBtn = useCallback(() => {
    data.setInputsErrors((values) => ({
      ...values,
      [INPUTS.email.name]: ''
    }));
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.email.name]: undefined
    }));
    setIsChangeMode((value) => !value);
  }, [data]);

  const handleChangePasswordMode = useCallback(() => {
    setIsChangePasswordMode((value) => !value);
  }, []);

  const handleCancelPasswordChange = useCallback(() => {
    data.setInputsErrors((values) => ({
      ...values,
      [INPUTS.password.name]: ''
    }));
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.password.name]: undefined
    }));
    setCurrentPassword('');
    setIsChangePasswordMode((value) => !value);
  }, [data]);

  const handleClickSavePasswordBtn = useCallback(async () => {
    setIsShowAlert(true);
    try {
      const localToken = localStorage.getItem('Token');
      if (localToken !== '') {
        const userData: MyCustomerChangePassword = {
          version: initialValues.version,
          currentPassword,
          newPassword: data.inputsValues[INPUTS.password.name]!
        };
        await eCommerceAPI
          .updateUserPassword(
            localToken as string,
            userData,
            initialValues.email,
            userData.newPassword,
            setIsActualData
          )
          .then(() => {
            setIsShowCircleProgress(false);
            setAlertData({
              typeAlert: Alerts.SUCCESS,
              textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
            });
            setIsChangePasswordMode(false);
            // setIsActualData(false);
          });
      }
    } catch (error) {
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.ERROR,
        textAlert: AlertsText.ERROR_UPDATE_USER
      });
      console.error('Error update user password:', error);
    }
  }, [
    currentPassword,
    data.inputsValues,
    initialValues.email,
    initialValues.version,
    setAlertData,
    setIsActualData,
    setIsShowAlert,
    setIsShowCircleProgress
  ]);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setCurrentPassword(e.target.value);
  }, []);

  return (
    <>
      <Title variant="h6" className={styles.title}>
        Credential information
      </Title>
      {!isChangeMode && (
        <Button variant="outlined" onClick={handleEditMode}>
          Edit
        </Button>
      )}
      <ValidationInput
        label={EMAIL_LABEL}
        name={INPUTS.email.name}
        onChange={data.handleOnChangeInput(checkEmail)}
        disabled={!isChangeMode}
        error={!!data.inputsErrors[INPUTS.email.name]}
        value={data.inputsValues[INPUTS.email.name] ?? initialValues.email}
      >
        <FormHelperText error>
          {data.inputsErrors[INPUTS.email.name] && data.inputsErrors[INPUTS.email.name]}
        </FormHelperText>
      </ValidationInput>
      {isChangeMode && (
        <>
          <Button variant="outlined" disabled={!!data.inputsErrors[INPUTS.email.name]} onClick={handleClickSaveBtn}>
            Save
          </Button>
          <Button variant="outlined" onClick={handleClickCancelBtn}>
            Cancel
          </Button>
        </>
      )}
      {!isChangePasswordMode && (
        <Button variant="outlined" onClick={handleChangePasswordMode}>
          Change Password
        </Button>
      )}

      {isChangePasswordMode && (
        <>
          <ValidationInput
            type={showPassword ? InputType.TEXT : InputType.PASSWORD}
            label={CURRENT_PASSWORD}
            onChange={handleChangePassword}
            endAdornment={
              <ShowPasswordBtn setShowPassword={setShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </ShowPasswordBtn>
            }
          >
            <div />
          </ValidationInput>
          <ValidationInput
            type={showNewPassword ? InputType.TEXT : InputType.PASSWORD}
            label={NEW_PASSWORD}
            name={INPUTS.password.name}
            onChange={data.handleOnChangeInput(checkPassword)}
            error={!!data.inputsErrors[INPUTS.password.name]}
            endAdornment={
              <ShowPasswordBtn setShowPassword={setShowNewPassword}>
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </ShowPasswordBtn>
            }
          >
            <FormHelperText error>
              {data.inputsErrors[INPUTS.password.name] && data.inputsErrors[INPUTS.password.name]}
            </FormHelperText>
          </ValidationInput>
          <Button
            variant="outlined"
            disabled={currentPassword === '' ? true : !!data.inputsErrors[INPUTS.password.name]}
            onClick={handleClickSavePasswordBtn}
          >
            Save
          </Button>
          <Button variant="outlined" onClick={handleCancelPasswordChange}>
            Cancel
          </Button>
        </>
      )}
    </>
  );
}
