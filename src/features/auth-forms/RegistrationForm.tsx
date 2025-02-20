import { Stack } from '@mui/system';

import { TitleTypography } from '@/shared/ui/elements/typography/TitleTypography';

// const sxTitle: SxProps = { py: 1.5 };

// const INIT_INPUTS_DATA = {
//   birthday: MAX_DATE_DASH,
//   shippingCountry: COUNTRY_LIST[0].code,
//   billingCountry: COUNTRY_LIST[0].code
// };

// const INIT_POSTAL_PATTERN = {
//   shipping: undefined,
//   billing: undefined
// };

export function RegistrationForm() {
  // const dispatch = useAppDispatch();
  // const [inputsValues, setInputsValues] = useState<IInputsValues>(INIT_INPUTS_DATA);
  // const [inputsErrors, setInputsErrors] = useState<IInputsErrors>({});
  // const [isShowCircleProgress, setIsShowCircleProgress] = useState(false);
  // const [isSameAddress, setIsSameAddress] = useState(false);
  // const [isDefaultBillingAddress, setIsDefaultBillingAddress] = useState(false);
  // const [isDefaultShippingAddress, setIsDefaultShippingAddress] = useState(false);
  // const [postalCodePattern, setPostalCodePattern] = useState<PostalCodePattern>(INIT_POSTAL_PATTERN);

  // const handleOnChangeInput: HandleOnChangeInput = useCallback(
  //   (checkFunction: (value: string, pattern?: RegExp) => string) =>
  //     (e: InputReactEvent): void => {
  //       const newValue = e.target.value;
  //       const prefix = getPrefix(e.target.name);
  //       const error = checkFunction(newValue, prefix ? postalCodePattern[prefix] : undefined);
  //       setInputsErrors((values) => ({ ...values, [e.target.name]: error }));
  //       setInputsValues((values) => ({ ...values, [e.target.name]: newValue }));
  //     },
  //   [postalCodePattern]
  // );

  // const handleOnChangeAutocomplete: HandleChangeAutocomplete = useCallback(
  //   (event, value) => {
  //     if (!(event.currentTarget.parentNode instanceof HTMLElement)) {
  //       return;
  //     }
  //     const id = event.currentTarget.parentNode?.id;
  //     const prefix = getPrefix(id);
  //     if (!prefix) {
  //       return;
  //     }
  //     setPostalCodePattern((values) => ({ ...values, [prefix]: value?.postalCodePattern }));
  //     const postalCodeName = INPUTS[`${prefix}${AddressProperty.POSTAL_CODE}`].name;
  //     const countryName = INPUTS[`${prefix}${AddressProperty.COUNTRY}`].name;
  //     const error = checkPostalCode(inputsValues[postalCodeName] ?? '', value?.postalCodePattern);
  //     setInputsErrors((values) => ({ ...values, [postalCodeName]: error }));
  //     setInputsValues((values) => ({
  //       ...values,
  //       [countryName]: value?.code ?? ''
  //     }));
  //   },
  //   [inputsValues]
  // );

  // const handleToggleAsBilling = useCallback(() => {
  //   if (!isSameAddress) {
  //     const addressProperty = Object.values(AddressProperty);
  //     for (const value of addressProperty) {
  //       setInputsValues((values) => ({ ...values, [INPUTS[`${AddressPrefix.BILLING}${value}`].name]: '' }));
  //       setInputsErrors((values) => ({ ...values, [INPUTS[`${AddressPrefix.BILLING}${value}`].name]: '' }));
  //     }
  //   }
  //   setIsSameAddress((value) => !value);
  // }, [isSameAddress]);

  // const handleToggleDefaultBilling = (): void => {
  //   setIsDefaultBillingAddress((value) => !value);
  // };

  // const handleToggleDefaultShipping = (): void => {
  //   setIsDefaultShippingAddress((value) => !value);
  // };

  // const handleSubmit = useCallback(
  //   async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     event.preventDefault();
  //     dispatch(
  //       createUserApi(inputsValues, setInputsErrors, setIsShowCircleProgress, isSameAddress, isDefaultShippingAddress, isDefaultBillingAddress)
  //     );
  //   },
  //   [dispatch, inputsValues, isSameAddress, isDefaultShippingAddress, isDefaultBillingAddress]
  // );

  // const isFirstNameError = !!inputsErrors[INPUTS.firstName.name];
  // const isLastNameError = !!inputsErrors[INPUTS.lastName.name];

  return (
    <Stack component="form" gap={1} width={{ zero: '100%', tablet: '70%' }}>
      <TitleTypography variant="h6" pb="1.5rem">
        User credentials
      </TitleTypography>
      {/* <ValidationInput
        label={INPUTS.firstName.label}
        name={INPUTS.firstName.name}
        error={isFirstNameError}
        onChange={handleOnChangeInput(checkGeneralRule)}
      >
        {isFirstNameError && inputsErrors[INPUTS.firstName.name]}
      </ValidationInput>
      <ValidationInput
        label={INPUTS.lastName.label}
        name={INPUTS.lastName.name}
        error={isLastNameError}
        onChange={handleOnChangeInput(checkGeneralRule)}
      >
        {isLastNameError && inputsErrors[INPUTS.lastName.name]}
      </ValidationInput>
      <DateInput
        label="Birthday"
        name="birthday"
        validationChecks={checkBirthday}
        defaultValue={MAX_DATE}
        maxDate={MAX_DATE}
        minDate={MIN_DATE}
        setInputs={setInputsValues}
      />
      <LoginBlock onChangeFunction={handleOnChangeInput} inputsErrors={inputsErrors} />
      <TitleTypography variant="h6" sx={sxTitle}>
        Shipping Address
      </TitleTypography>
      <AddressSection
        onChangeAutocomplete={handleOnChangeAutocomplete}
        onChangeFunction={handleOnChangeInput}
        inputsErrors={inputsErrors}
        inputsValues={inputsValues}
        prefix={AddressPrefix.SHIPPING}
      />
      <FormControlLabel control={<Checkbox checked={isSameAddress} onChange={handleToggleAsBilling} />} label="Set as billing address" />
      <FormControlLabel
        control={<Checkbox checked={isDefaultShippingAddress} onChange={handleToggleDefaultShipping} />}
        label="Set as default shipping address"
      />
      {!isSameAddress && (
        <>
          <TitleTypography variant="h6" sx={sxTitle}>
            Billing Address
          </TitleTypography>
          <AddressSection
            onChangeAutocomplete={handleOnChangeAutocomplete}
            onChangeFunction={handleOnChangeInput}
            inputsErrors={inputsErrors}
            inputsValues={inputsValues}
            prefix={AddressPrefix.BILLING}
          />
        </>
      )}
      <FormControlLabel
        control={<Checkbox checked={isDefaultBillingAddress} onChange={handleToggleDefaultBilling} />}
        label="Set as default billing address"
      />
      <Button
        type="submit"
        variant="contained"
        loading={isShowCircleProgress}
        loadingPosition="start"
        disabled={!checkAllInputs(inputsValues, inputsErrors, isSameAddress)}
        onClick={handleSubmit}
      >
        Register
      </Button> */}
    </Stack>
  );
}
