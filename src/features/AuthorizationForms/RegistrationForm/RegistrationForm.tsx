import React from 'react';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';
import getMaxDate from '@/utils/getMaxDate';
import getMinDate from '@/utils/getMinDate';
import AddressBlock from '@/features/AuthorizationForms/components/AddressSection/AddressSection';
import ButtonCustom from '@/components/ButtonCustom/ButtonCustom';
import checkBirthday from '@/features/validation/birthdayValidation';
import CredentialBlock from '@/features/AuthorizationForms/components/CredentialBlock/CredentialBlock';
import checkGeneralRule from '@/features/validation/generalValidation';
import { Title } from '@/components/Title/Title';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { DateInput } from '@/features/AuthorizationForms/components/DateInput/DateInput';
import { AddressPrefix } from '@/features/AuthorizationForms/data/AuthorizationForms.enum';
import { checkAllInputs } from '@/features/AuthorizationForms/data/AuthorizationForms.helpers';
import { ValidationInput } from '@/features/AuthorizationForms/components/ValidationInput/ValidationInput';
import { useRegistrationForm } from '@/features/AuthorizationForms/RegistrationForm/hooks/useRegistrationForm';

import styles from './RegistrationForm.module.scss';

export default function RegistrationForm(): React.ReactNode {
  const data = useRegistrationForm();

  return (
    <Box component="form" className={styles.form}>
      <Title variant="h6" className={styles.title}>
        User credentials
      </Title>
      <ValidationInput
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        <FormHelperText error>
          {data.inputsErrors[INPUTS.firstName.name] && data.inputsErrors[INPUTS.firstName.name]}
        </FormHelperText>
      </ValidationInput>
      <ValidationInput
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        <FormHelperText error>
          {data.inputsErrors[INPUTS.lastName.name] && data.inputsErrors[INPUTS.lastName.name]}
        </FormHelperText>
      </ValidationInput>
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={dayjs(getMaxDate())}
        maxDate={dayjs(getMaxDate())}
        minDate={dayjs(getMinDate())}
        setInputs={data.setInputsValues}
      />
      <CredentialBlock onChangeFunction={data.handleOnChangeInput} inputsErrors={data.inputsErrors} />
      <Title variant="h6" className={styles.title}>
        Shipping Address
      </Title>
      <AddressBlock
        onChangeComboBox={data.handleOnChangeComboBox}
        onChangeFunction={data.handleOnChangeInput}
        inputsErrors={data.inputsErrors}
        inputsValues={data.inputsValues}
        prefix={AddressPrefix.SHIPPING}
      />
      <FormControlLabel
        control={<Checkbox checked={data.isSameAddress} onChange={data.handleToggleAsBilling} />}
        label="Set as billing address"
      />
      <FormControlLabel
        control={<Checkbox checked={data.isDefaultShippingAddress} onChange={data.handleToggleDefaultShipping} />}
        label="Set as default shipping address"
      />
      {!data.isSameAddress && (
        <>
          <Title variant="h6" className={styles.title}>
            Billing Address
          </Title>
          <AddressBlock
            onChangeComboBox={data.handleOnChangeComboBox}
            onChangeFunction={data.handleOnChangeInput}
            inputsErrors={data.inputsErrors}
            inputsValues={data.inputsValues}
            prefix={AddressPrefix.BILLING}
          />
        </>
      )}
      <FormControlLabel
        control={<Checkbox checked={data.isDefaultBillingAddress} onChange={data.handleToggleDefaultBilling} />}
        label="Set as default billing address"
      />
      <ButtonCustom
        disabled={!checkAllInputs(data.inputsValues, data.inputsErrors, data.isSameAddress)}
        onClick={data.handleSubmit}
      >
        Register
      </ButtonCustom>
      <Backdrop open={data.isShowAlert} onClick={data.handleBackdrop}>
        {data.isShowCircleProgress ? (
          <CircularProgress color="primary" />
        ) : (
          <Alert severity={data.alertData.typeAlert}>{data.alertData.textAlert}</Alert>
        )}
      </Backdrop>
    </Box>
  );
}
