import { AlertsText } from '@/data/enum/alerts.enum';
import { ValidationErrors } from '@/features/validation/data/validation.enum';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddress, ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { IAuthTokens } from '@/context/AuthContext/AuthContext.interface';

export async function createCustomer(
  inputsValues: IInputsValues,
  setAuthTokens: React.Dispatch<React.SetStateAction<IAuthTokens>> | (() => void),
  setInputsError: React.Dispatch<React.SetStateAction<IInputsErrors>>,
  setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>,
  handleOpenAlert: (message: string, severity: Severity) => void,
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

  const createCustomerDate: ICreateCustomerParams = {
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
    await eCommerceAPI.createCustomer(createCustomerDate);
    eCommerceAPI.logoutCustomer();
    const token = await eCommerceAPI.authenticateCustomer(inputsValues.email!, inputsValues.password!);
    setAuthTokens((prev) => ({ ...prev, token }));
    await eCommerceAPI.createCart(token);
    handleOpenAlert(AlertsText.SUCCESS_TEXT, Severity.SUCCESS);
  } catch (error) {
    console.warn(error);
    if (error instanceof Error) {
      if (error.message === AlertsText.ERROR_EMAIL_TEXT) {
        setInputsError((values) => ({ ...values, [INPUTS.email.name]: ValidationErrors.API }));
        handleOpenAlert(AlertsText.ERROR_EMAIL_TEXT, Severity.ERROR);
      } else {
        handleOpenAlert(AlertsText.ERROR_CONNECTION_TEXT, Severity.ERROR);
      }
    }
  } finally {
    setIsShowCircleProgress(false);
  }
}
