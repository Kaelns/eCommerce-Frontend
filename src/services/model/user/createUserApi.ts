import { ValidationErrors } from '@/features/validation/data/validation.enum';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddress, ICreateUserParams } from '@/services/ECommerceInitApi.interface';
import { INPUTS } from '@/features/AuthForms/data/AuthForms.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthForms/data/AuthForms.types';
import { IAuthTokens } from '@/context/AuthContext/AuthContext.interface';
import { ShowAlertText } from '@/features/AlertText/useAlertText';
import { AlertsAPIText, Severity } from '@/shared/constants';

export async function createUserApi(
  inputsValues: IInputsValues,
  setAuthTokens: React.Dispatch<React.SetStateAction<IAuthTokens>> | (() => void),
  setInputsError: React.Dispatch<React.SetStateAction<IInputsErrors>>,
  setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>,
  showAlert: ShowAlertText,
  isSameAddress: boolean,
  isDefaultShippingAddress: boolean,
  isDefaultBillingAddress: boolean
): Promise<void> {
  const SHIPPING_ADDRESS_INDEX = 0;
  const BILLING_ADDRESS_INDEX = isSameAddress ? 0 : 1;

  const addresses: IAddress[] = isSameAddress
    ? [
        {
          country: inputsValues.shippingCountry!,
          postalCode: inputsValues.shippingPostalCode!,
          city: inputsValues.shippingCity!,
          streetName: inputsValues.shippingStreet!
        }
      ]
    : [
        {
          country: inputsValues.shippingCountry!,
          postalCode: inputsValues.shippingPostalCode!,
          city: inputsValues.shippingCity!,
          streetName: inputsValues.shippingStreet!
        },
        {
          country: inputsValues.billingCountry!,
          postalCode: inputsValues.billingPostalCode!,
          city: inputsValues.billingCity!,
          streetName: inputsValues.billingStreet!
        }
      ];

  const createCustomerDate: ICreateUserParams = {
    firstName: inputsValues.firstName!,
    lastName: inputsValues.lastName!,
    email: inputsValues.email!,
    password: inputsValues.password!,
    dateOfBirth: inputsValues.birthday!,
    addresses,
    billingAddresses: [BILLING_ADDRESS_INDEX],
    shippingAddresses: [SHIPPING_ADDRESS_INDEX]
  };

  if (isDefaultBillingAddress) {
    createCustomerDate.defaultBillingAddress = BILLING_ADDRESS_INDEX;
  }
  if (isDefaultShippingAddress) {
    createCustomerDate.defaultShippingAddress = SHIPPING_ADDRESS_INDEX;
  }

  setIsShowCircleProgress(true);
  try {
    const { token, refreshToken, expirationTime } = await eCommerceAPI.createUser(createCustomerDate);
    console.log('User creation', token, refreshToken, expirationTime);
    // const token = await eCommerceAPI.authenticateUser(inputsValues.email!, inputsValues.password!);
    setAuthTokens((prev) => ({ ...prev, token, refreshToken: refreshToken ?? '' }));
    await eCommerceAPI.createCart();
    showAlert(AlertsAPIText.USER_CREATE_SUCCESS, Severity.SUCCESS);
  } catch (error) {
    console.warn(error);
    if (error instanceof Error) {
      if (error.message === AlertsAPIText.EMAIL_DUPLICATE_ERROR) {
        setInputsError((values) => ({ ...values, [INPUTS.email.name]: ValidationErrors.API }));
        showAlert(AlertsAPIText.EMAIL_DUPLICATE_ERROR, Severity.ERROR);
      } else {
        showAlert(AlertsAPIText.REGISTRATION_CONNECTION_ERROR, Severity.ERROR);
      }
    }
  } finally {
    setIsShowCircleProgress(false);
  }
}
