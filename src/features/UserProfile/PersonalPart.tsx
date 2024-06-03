import { useCallback, useState } from 'react';
import { Button, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';

import { version } from 'os';
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

export default function PersonalPart({ data }: { data: IUseRegistrationFormReturn }): React.ReactNode {
  const [isChangeMode, setChangeMode] = useState(false);

  const handleEditMode = useCallback(() => {
    setChangeMode((value) => !value);
  }, []);

  const handleClickSaveBtn = useCallback(async () => {
    try {
      const localToken = localStorage.getItem('Token');
      if (localToken !== '') {
        const userData: MyCustomerUpdate = {
          version: 19,
          actions: [
            {
              action: 'setFirstName',
              firstName: 'Volodya'
            },
            {
              action: 'setLastName',
              lastName: 'Volikov'
            },
            {
              action: 'setDateOfBirth',
              dateOfBirth: '1992-03-25'
            }
          ]
        };
        const response = await eCommerceAPI.updateUser(localToken as string, userData);
        console.log(response);
      }
    } catch (error) {
      console.error('Error update user data:', error);
    }
  }, []);

  const handleClickCancelBtn = useCallback(() => {
    data.setInputsErrors((values) => ({
      ...values,
      [INPUTS.firstName.name]: '',
      [INPUTS.lastName.name]: '',
      [INPUTS.birthday.name]: ''
    }));
    setChangeMode((value) => !value);
  }, [data]);

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
        value={data.inputsValues[INPUTS.firstName.name] ?? ''}
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
        value={data.inputsValues[INPUTS.lastName.name] ?? ''}
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
