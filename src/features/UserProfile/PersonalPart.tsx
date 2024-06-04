import { useCallback, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';

import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { Title } from '@/components/Title/Title';
import styles from './UserProfile.module.scss';
import { DateInput } from '@/features/AuthorizationForms/components/DateInput/DateInput';
import checkBirthday from '@/features/validation/birthdayValidation';
import getMaxDate from '@/utils/getMaxDate';
import getMinDate from '@/utils/getMinDate';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import checkGeneralRule from '@/features/validation/generalValidation';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IResponseUserData } from '@/features/UserProfile/UserProfile.interface';

export default function PersonalPart({
  data,
  initialValues,
  setIsActualData
}: {
  data: IUseRegistrationFormReturn;
  initialValues: IResponseUserData;
  setIsActualData: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactNode {
  const [isChangeMode, setIsChangeMode] = useState(false);

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
    console.log(initialValues);
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
        const response = await eCommerceAPI.updateUser(localToken as string, userData);
        console.log(response);
        setIsChangeMode(false);
        setIsActualData(false);
      }
    } catch (error) {
      console.error('Error update user data:', error);
    }
  }, [data.inputsValues, initialValues, setIsActualData]);

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
        label="Birthday"
        name="birthday"
        disabled={!isChangeMode}
        validationChecks={checkBirthday}
        value={dayjs(data.inputsValues[INPUTS.birthday.name]) ?? dayjs(getMaxDate())}
        maxDate={dayjs(getMaxDate())}
        minDate={dayjs(getMinDate())}
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
