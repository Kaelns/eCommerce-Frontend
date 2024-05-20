import React, { useState, useCallback } from 'react';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, FormHelperText } from '@mui/material';
import AddressBlock from '@/features/AuthorizationForms/components/AddressBlock/AddressBlock';
import ButtonCustom from '@/features/AuthorizationForms/components/Button/Button';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import DateInput from '@/features/AuthorizationForms/components/DateInput/DateInput';
import Input from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import OnChangeComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';
import checkBirthday from '@/features/validation/birthdayValidation';
import checkGeneralRule from '@/features/validation/generalValidation';
import checkPostalCode from '@/features/validation/postalCodeValidation';
import getMaxDate from '@/utils/getMaxDate';
import getMinDate from '@/utils/getMinDate';
import { AddressPrefix } from '@/features/AuthorizationForms/data/addressPrefix.enum';
import { AddressProperty } from '@/features/AuthorizationForms/data/addressProperty.enum';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { Title } from '@/components/ui/Title';
import { checkAllInputs } from '@/features/AuthorizationForms/forms.helper';
import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';
import { createCustomer } from '@/utils/createCustomerApi';

import styles from './Registration.module.scss';

export default function RegistrationForm(): JSX.Element {
  const [inputsValues, setInputs] = useState<IInputsValues>({ birthday: dayjs(getMaxDate()).format('YYYY-MM-DD') });
  const [inputsErrors, setInputsError] = useState<IInputsErrors>({});
  const [showAlert, isShowAlert] = useState(false);
  const [showCircleProgress, isShowCircleProgress] = useState(true);
  const [alertData, setAlertData] = useState({
    typeAlert: Alerts.ERROR,
    textAlert: AlertsText.ERROR_EMAIL_TEXT
  });
  const { setAuthUserToken } = useAuthContext();

  const [postalCodePattern, setPostalCodePattern] = useState<{ [key in AddressPrefix]: RegExp | undefined }>({
    shipping: undefined,
    billing: undefined
  });

  const handleOnChangeInput = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      checkFunction: (value: string, pattern?: RegExp) => string
    ) => {
      const newValue = e.target.value;
      const prefix = e.target.name.match(AddressPrefix.BILLING) ?? e.target.name.match(AddressPrefix.SHIPPING);
      const error = prefix
        ? checkFunction(newValue, postalCodePattern[prefix[0] as AddressPrefix])
        : checkFunction(newValue);
      setInputsError((values) => ({ ...values, [e.target.name]: error }));
      setInputs((values) => ({ ...values, [e.target.name]: newValue }));
    },
    [postalCodePattern]
  );

  const handleOnChangeComboBox: OnChangeComboBox = useCallback(
    (event, value) => {
      if (event.currentTarget.parentNode instanceof HTMLElement) {
        const id = event.currentTarget.parentNode?.id;
        const matchPrefix = id.match(AddressPrefix.BILLING) ?? id.match(AddressPrefix.SHIPPING);
        if (matchPrefix) {
          const prefix = matchPrefix[0] as AddressPrefix;
          setPostalCodePattern((values) => ({ ...values, [prefix]: value?.postalCodePattern }));
          const error = checkPostalCode(
            inputsValues[INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name] ?? '',
            value?.postalCodePattern
          );
          setInputsError((values) => ({ ...values, [INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name]: error }));
          setInputs((values) => ({
            ...values,
            [INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name]: value?.code ?? ''
          }));
        }
      }
    },
    [inputsValues]
  );

  const onClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await createCustomer(
        inputsValues,
        setAuthUserToken,
        setInputsError,
        isShowAlert,
        isShowCircleProgress,
        setAlertData
      );
    },
    [inputsValues]
  );

  return (
    <Box component="form" className={styles.form}>
      <Title variant="h6" className={styles.title}>
        User credentials
      </Title>
      <Input
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleOnChangeInput(event, checkGeneralRule)
        }
      >
        <FormHelperText error>
          {inputsErrors[INPUTS.firstName.name] && inputsErrors[INPUTS.firstName.name]}
        </FormHelperText>
      </Input>
      <Input
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleOnChangeInput(event, checkGeneralRule)
        }
      >
        <FormHelperText error>
          {inputsErrors[INPUTS.lastName.name] && inputsErrors[INPUTS.lastName.name]}
        </FormHelperText>
      </Input>
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={dayjs(getMaxDate())}
        maxDate={dayjs(getMaxDate())}
        minDate={dayjs(getMinDate())}
        setInputs={setInputs}
      />
      <CredentialBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsErrors} />
      <Title variant="h6" className={styles.title}>
        Shipping Address
      </Title>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsErrors={inputsErrors}
        prefix={AddressPrefix.SHIPPING}
      />
      <Title variant="h6" className={styles.title}>
        Billing Address
      </Title>
      <AddressBlock
        onChangeComboBox={handleOnChangeComboBox}
        onChangeFunction={handleOnChangeInput}
        inputsErrors={inputsErrors}
        prefix={AddressPrefix.BILLING}
      />
      <ButtonCustom disabled={!checkAllInputs(inputsValues, inputsErrors)} onClick={onClick}>
        Register
      </ButtonCustom>
      <Backdrop
        open={showAlert}
        onClick={() => {
          isShowAlert(false);
          isShowCircleProgress(true);
        }}
      >
        {showCircleProgress ? (
          <CircularProgress color="primary" />
        ) : (
          <Alert severity={alertData.typeAlert}>{alertData.textAlert}</Alert>
        )}
      </Backdrop>
    </Box>
  );
}
