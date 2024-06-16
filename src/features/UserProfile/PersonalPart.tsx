import { useCallback, useMemo, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';

import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { Title } from '@/components/typography/Title/Title';
import styles from './UserProfile.module.scss';
import { DateInput } from '@/features/AuthorizationForms/components/DateInput/DateInput';
import checkBirthday from '@/features/validation/birthdayValidation';
import checkGeneralRule from '@/features/validation/generalValidation';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IUserProfilePartWithInitial } from '@/features/UserProfile/UserProfile.interface';
import { Alerts, AlertsText } from '@/data/enum/alerts.enum';

export default function PersonalPart({
  data,
  initialValues,
  setIsActualData,
  setIsShowAlert,
  setIsShowCircleProgress,
  setAlertData
}: IUserProfilePartWithInitial): React.ReactNode {
  const [isChangeMode, setIsChangeMode] = useState(false);
  const currentDate = useMemo(
    () => dayjs(data.inputsValues[INPUTS.birthday.name]) ?? data.maxDate,
    [data.inputsValues, data.maxDate]
  );

  const handleEditMode = useCallback(() => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.firstName.name]: initialValues.firstName,
      [INPUTS.lastName.name]: initialValues.lastName,
      [INPUTS.birthday.name]: initialValues.birthday
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
              action: 'setFirstName',
              firstName: data.inputsValues[INPUTS.firstName.name]
            },
            {
              action: 'setLastName',
              lastName: data.inputsValues[INPUTS.lastName.name]
            },
            {
              action: 'setDateOfBirth',
              dateOfBirth: data.inputsValues[INPUTS.birthday.name]
            }
          ]
        };
        await eCommerceAPI.updateUser(localToken as string, userData).then(() => {
          setIsShowCircleProgress(false);
          setAlertData({
            typeAlert: Alerts.SUCCESS,
            textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
          });
        });
        setIsChangeMode(false);
        setIsActualData(false);
      }
    } catch (error) {
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.ERROR,
        textAlert: AlertsText.ERROR_UPDATE_USER
      });
      console.error('Error update user data:', error);
    }
  }, [data.inputsValues, initialValues, setAlertData, setIsActualData, setIsShowAlert, setIsShowCircleProgress]);

  const handleClickCancelBtn = useCallback(() => {
    data.setInputsErrors((values) => ({
      ...values,
      [INPUTS.firstName.name]: '',
      [INPUTS.lastName.name]: '',
      [INPUTS.birthday.name]: ''
    }));
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.firstName.name]: undefined,
      [INPUTS.lastName.name]: undefined,
      [INPUTS.birthday.name]: initialValues.birthday
    }));
    setIsChangeMode((value) => !value);
  }, [initialValues, data]);

  return (
    <>
      <Title variant="h6" className={styles.title}>
        Personal information
      </Title>
      {!isChangeMode && (
        <Button variant="outlined" onClick={handleEditMode}>
          Edit
        </Button>
      )}
      <ValidationInput
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        disabled={!isChangeMode}
        value={data.inputsValues[INPUTS.firstName.name] ?? initialValues.firstName}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        <FormHelperText error>
          {data.inputsErrors[INPUTS.firstName.name] && data.inputsErrors[INPUTS.firstName.name]}
        </FormHelperText>
      </ValidationInput>
      <ValidationInput
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        disabled={!isChangeMode}
        value={data.inputsValues[INPUTS.lastName.name] ?? initialValues.lastName}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        <FormHelperText error>
          {data.inputsErrors[INPUTS.lastName.name] && data.inputsErrors[INPUTS.lastName.name]}
        </FormHelperText>
      </ValidationInput>
      <DateInput
        label={INPUTS.birthday.label}
        name={INPUTS.birthday.name}
        disabled={!isChangeMode}
        validationChecks={checkBirthday}
        value={currentDate}
        maxDate={data.maxDate}
        minDate={data.minDate}
        setInputs={data.setInputsValues}
      />
      {isChangeMode && (
        <>
          <Button
            variant="outlined"
            disabled={
              !!(
                data.inputsErrors[INPUTS.birthday.name] ??
                data.inputsErrors[INPUTS.lastName.name] ??
                data.inputsErrors[INPUTS.firstName.name]
              )
            }
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button variant="outlined" onClick={handleClickCancelBtn}>
            Cancel
          </Button>
        </>
      )}
    </>
  );
}
