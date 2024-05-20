import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { ValidationErrors } from '@/data/enum/validationError.enum';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { ICreateCustomerParams } from '@/services/interface';
import { INPUTS } from '@/features/AuthorizationForms/data/forms.constants';
import { IInputsErrors, IInputsValues } from '@/features/AuthorizationForms/data/InputTypes';

export async function createCustomer(
  inputsValues: IInputsValues,
  setAuthUserToken: (token: string) => void,
  setInputsError: React.Dispatch<React.SetStateAction<IInputsErrors>>,
  isShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
  isShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>,
  setAlertData: React.Dispatch<React.SetStateAction<{ typeAlert: Alerts; textAlert: AlertsText }>>
): Promise<void> {
  const BILLING_ADDRES_INDEX = 0;
  const SHIPPING_ADDRES_INDEX = 1;

  const createCustomerDate: ICreateCustomerParams = {
    firstName: inputsValues.firstName!,
    lastName: inputsValues.lastName!,
    email: inputsValues.email!,
    password: inputsValues.password!,
    dateOfBirth: inputsValues.birthday!,
    addresses: [
      {
        country: inputsValues.billingCountry!,
        postalCode: inputsValues.billingPostalCode!,
        city: inputsValues.billingCity!
      },
      {
        country: inputsValues.shippingCountry!,
        postalCode: inputsValues.shippingPostalCode!,
        city: inputsValues.shippingCity!
      }
    ],
    billingAddresses: [BILLING_ADDRES_INDEX],
    shippingAddresses: [SHIPPING_ADDRES_INDEX]
  };
  isShowAlert(true);

  try {
    const result = await eCommerceAPI.createCustomer(createCustomerDate);
    const authCustomer = await eCommerceAPI.authenticateCustomer(inputsValues.email!, inputsValues.password!);
    setTimeout(() => {
      setAuthUserToken('login_is_ok');
    }, 1000);
    isShowCircleProgress(false);
    setAlertData({
      typeAlert: Alerts.SUCCESS,
      textAlert: AlertsText.SUCCESS_TEXT
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      if (error.message === AlertsText.ERROR_EMAIL_TEXT) {
        setInputsError((values) => ({ ...values, [INPUTS.email.name]: ValidationErrors.API }));
        isShowCircleProgress(false);
        setAlertData({
          typeAlert: Alerts.ERROR,
          textAlert: AlertsText.ERROR_EMAIL_TEXT
        });
      } else {
        isShowCircleProgress(false);
        setAlertData({
          typeAlert: Alerts.ERROR,
          textAlert: AlertsText.ERROR_CONNECTION_TEXT
        });
      }
    }
  }
}
