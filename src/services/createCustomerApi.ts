import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { ValidationErrors } from '@/features/validation/data/validation.enum';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddress, ICreateCustomerParams } from '@/services/ECommerceInitApi.interface';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/AuthorizationForms.types';

export async function createCustomer(
  inputsValues: IInputsValues,
  setAuthUserToken: (token: string) => void,
  setInputsError: React.Dispatch<React.SetStateAction<IInputsErrors>>,
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>,
  setAlertData: React.Dispatch<React.SetStateAction<{ typeAlert: Alerts; textAlert: AlertsText }>>,
  isSameAddress: boolean,
  isDefaultShippingAddress: boolean,
  isDefaultBillingAddress: boolean
): Promise<void> {
  const SHIPPING_ADDRES_INDEX = 0;
  const BILLING_ADDRES_INDEX = isSameAddress ? 0 : 1;

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
    billingAddresses: [BILLING_ADDRES_INDEX],
    shippingAddresses: [SHIPPING_ADDRES_INDEX]
  };

  if (isDefaultBillingAddress) {
    createCustomerDate.defaultBillingAddress = BILLING_ADDRES_INDEX;
  }
  if (isDefaultShippingAddress) {
    createCustomerDate.defaultShippingAddress = SHIPPING_ADDRES_INDEX;
  }

  setIsShowAlert(true);

  await eCommerceAPI
    .createCustomer(createCustomerDate)
    .then(async () => {
      setTimeout(() => {
        setAuthUserToken('login_is_ok');
      }, 1000);
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.SUCCESS,
        textAlert: AlertsText.SUCCESS_TEXT
      });
      eCommerceAPI.logoutCustomer();
      const authResponse = await eCommerceAPI.authenticateCustomer(inputsValues.email!, inputsValues.password!);
      console.log('Customer authenticated successfully', authResponse);
    })
    .catch((error) => {
      console.warn(error);
      if (error instanceof Error) {
        if (error.message === AlertsText.ERROR_EMAIL_TEXT) {
          setInputsError((values) => ({ ...values, [INPUTS.email.name]: ValidationErrors.API }));
          setIsShowCircleProgress(false);
          setAlertData({
            typeAlert: Alerts.ERROR,
            textAlert: AlertsText.ERROR_EMAIL_TEXT
          });
        } else {
          setIsShowCircleProgress(false);
          setAlertData({
            typeAlert: Alerts.ERROR,
            textAlert: AlertsText.ERROR_CONNECTION_TEXT
          });
        }
      }
    });
}
