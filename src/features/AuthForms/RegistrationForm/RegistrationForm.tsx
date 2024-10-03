import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Stack, SxProps } from '@mui/system';
import { AddressSection } from '@/features/AuthForms/components/AddressSection';
import { LoginBlock } from '@/features/AuthForms/components/LoginBlock';
import { Title } from '@/components/typography/Title';
import { INPUTS, AddressPrefix } from '@/features/AuthForms/data/AuthForms.constants';
import { DateInput } from '@/features/AuthForms/components/DateInput';
import { checkAllInputs } from '@/features/AuthForms/data/AuthForms.helpers';
import { ValidationInput } from '@/features/AuthForms/components/ValidationInput';
import { useRegistrationForm } from '@/features/AuthForms/RegistrationForm/useRegistrationForm';
import checkGeneralRule from '@/features/validation/generalValidation';
import checkBirthday from '@/features/validation/birthdayValidation';
import { LoadingBtn } from '@/components/buttons/LoadingBtn';
import { MAX_DATE, MIN_DATE } from '@/shared/constants';

const sxTitle: SxProps = { py: 1.5 };

export default function RegistrationForm(): React.ReactNode {
  const data = useRegistrationForm();

  const isFirstNameError = !!data.inputsErrors[INPUTS.firstName.name];
  const isLastNameError = !!data.inputsErrors[INPUTS.lastName.name];

  return (
    <Stack component="form" gap={1} width={{ zero: '100%', tablet: '70%' }}>
      <Title variant="h6" pb="1.5rem">
        User credentials
      </Title>
      <ValidationInput
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        error={isFirstNameError}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        {isFirstNameError && data.inputsErrors[INPUTS.firstName.name]}
      </ValidationInput>
      <ValidationInput
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        error={isLastNameError}
        onChange={data.handleOnChangeInput(checkGeneralRule)}
      >
        {isLastNameError && data.inputsErrors[INPUTS.lastName.name]}
      </ValidationInput>
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={MAX_DATE}
        maxDate={MAX_DATE}
        minDate={MIN_DATE}
        setInputs={data.setInputsValues}
      />
      <LoginBlock onChangeFunction={data.handleOnChangeInput} inputsErrors={data.inputsErrors} />
      <Title variant="h6" sx={sxTitle}>
        Shipping Address
      </Title>
      <AddressSection
        onChangeAutocomplete={data.handleOnChangeAutocomplete}
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
          <Title variant="h6" sx={sxTitle}>
            Billing Address
          </Title>
          <AddressSection
            onChangeAutocomplete={data.handleOnChangeAutocomplete}
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
      <LoadingBtn
        type="submit"
        variant="contained"
        loading={data.isShowCircleProgress}
        disabled={!checkAllInputs(data.inputsValues, data.inputsErrors, data.isSameAddress)}
        onClick={data.handleSubmit}
      >
        Register
      </LoadingBtn>
    </Stack>
  );
}
