import { ValidationErrors } from '@/shared/zod/validation/data/validation.enum';
import type { IAddress, ICreateUserParams } from '@/services/interface';
import { INPUTS } from '@/features/AuthForms/data/AuthForms.constants';
import type { IInputsErrors, IInputsValues } from '@/features/AuthForms/data/AuthForms.types';
import { AlertsAPIText, Severity } from '@/shared/data/constants';
import type { IAppThunk } from '@/app/store';
import { authSliceActions } from '@/shared/slices/auth.slice';
import { cartSlice } from '@/pages/CartPage/cart.slice';
import { alertSliceActions } from '@/features/Alert/alert.slice';

export const createUserApi =
  (
    inputsValues: IInputsValues,
    setInputsError: React.Dispatch<React.SetStateAction<IInputsErrors>>,
    setIsShowCircleProgress: React.Dispatch<React.SetStateAction<boolean>>,
    isSameAddress: boolean,
    isDefaultShippingAddress: boolean,
    isDefaultBillingAddress: boolean
  ): IAppThunk =>
  async (dispatch, _, { api }) => {
    const SHIPPING_ADDRESS_INDEX = 0;
    const BILLING_ADDRESS_INDEX = isSameAddress ? 0 : 1;

    const addresses: IAddress[] = [
      {
        country: inputsValues.shippingCountry!,
        postalCode: inputsValues.shippingPostalCode!,
        city: inputsValues.shippingCity!,
        streetName: inputsValues.shippingStreet!
      }
    ];

    if (isSameAddress) {
      addresses.push({
        country: inputsValues.billingCountry!,
        postalCode: inputsValues.billingPostalCode!,
        city: inputsValues.billingCity!,
        streetName: inputsValues.billingStreet!
      });
    }

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
      const { token: authToken, refreshToken, expirationTime } = await api.user.createUser(createCustomerDate);
      const cart = await api.cart.createCart();
      console.log('User creation', authToken, refreshToken, expirationTime);
      // const token = await authenticateUser(inputsValues.email!, inputsValues.password!);
      dispatch(authSliceActions.loginAuthAction({ authToken, refreshAuthToken: refreshToken ?? '' }));
      dispatch(cartSlice.actions.setCartAction(cart));
      dispatch(alertSliceActions.showScreenNotificationAction({ message: AlertsAPIText.USER_CREATE_SUCCESS }));
    } catch (error) {
      console.warn(error);
      if (!(error instanceof Error)) {
        return;
      }
      if (error.message === AlertsAPIText.EMAIL_DUPLICATE_ERROR) {
        setInputsError((values) => ({ ...values, [INPUTS.email.name]: ValidationErrors.API }));
        dispatch(
          alertSliceActions.showScreenNotificationAction({
            message: AlertsAPIText.EMAIL_DUPLICATE_ERROR,
            severity: Severity.ERROR
          })
        );
      } else {
        dispatch(
          alertSliceActions.showScreenNotificationAction({
            message: AlertsAPIText.REGISTRATION_CONNECTION_ERROR,
            severity: Severity.ERROR
          })
        );
      }
    } finally {
      setIsShowCircleProgress(false);
    }
  };
