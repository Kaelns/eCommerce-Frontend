import { useCallback, useState } from 'react';
import {
  MyCustomerUpdate,
  MyCustomerAddBillingAddressIdAction,
  MyCustomerRemoveBillingAddressIdAction,
  MyCustomerSetDefaultBillingAddressAction,
  MyCustomerAddShippingAddressIdAction,
  MyCustomerRemoveShippingAddressIdAction,
  MyCustomerSetDefaultShippingAddressAction
} from '@commercetools/platform-sdk';

import { Alerts, AlertsText } from '@/data/enum/alerts.enum';
import { COUNTRY_LIST } from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { IAddressPart, IUseAddressPartReturn } from '@/features/UserProfile/AddressPart/AddressesPart.interface';
import { IResponseAddressData } from '@/features/UserProfile/UserProfile.interface';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { KEY_AUTH_USER_TOKEN } from '@/hooks/useAuthStorage/useAuthStorage.constants';

export const useAddressPart = ({
  data,
  addresses,
  version,
  setIsActualData,
  setIsShowAlert,
  setIsShowCircleProgress,
  setAlertData
}: IAddressPart): IUseAddressPartReturn => {
  const [isBillingAddress, setIsBillingAddress] = useState(false);
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [updateId, setUpdateId] = useState(-1);
  const [isAddMode, setIsAddMode] = useState(false);

  const clearValues = useCallback(() => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.shippingCity.name]: undefined,
      [INPUTS.shippingCountry.name]: COUNTRY_LIST[0].code,
      [INPUTS.shippingPostalCode.name]: undefined,
      [INPUTS.shippingStreet.name]: undefined
    }));
    data.setIsDefaultBillingAddress(false);
    data.setIsDefaultShippingAddress(false);
    setIsShippingAddress(false);
    setIsBillingAddress(false);
  }, [data]);

  const processCheckbox = useCallback(
    (userData: MyCustomerUpdate, id: string, isUpdate: boolean) => (): void => {
      if (isBillingAddress) {
        const action: MyCustomerAddBillingAddressIdAction = {
          action: 'addBillingAddressId',
          addressId: id
        };
        userData.actions.push(action);
      } else if (isUpdate && addresses[updateId].isBilling) {
        const action: MyCustomerRemoveBillingAddressIdAction = {
          action: 'removeBillingAddressId',
          addressId: id
        };
        userData.actions.push(action);
      }
      if (data.isDefaultBillingAddress) {
        const action: MyCustomerSetDefaultBillingAddressAction = {
          action: 'setDefaultBillingAddress',
          addressId: id
        };
        userData.actions.push(action);
      } else if (isUpdate && addresses[updateId].isDefaultBilling) {
        const action: MyCustomerSetDefaultBillingAddressAction = {
          action: 'setDefaultBillingAddress',
          addressId: undefined
        };
        userData.actions.push(action);
      }

      if (isShippingAddress) {
        const action: MyCustomerAddShippingAddressIdAction = {
          action: 'addShippingAddressId',
          addressId: id
        };
        userData.actions.push(action);
      } else if (isUpdate && addresses[updateId].isShipping) {
        const action: MyCustomerRemoveShippingAddressIdAction = {
          action: 'removeShippingAddressId',
          addressId: id
        };
        userData.actions.push(action);
      }

      if (data.isDefaultShippingAddress) {
        const action: MyCustomerSetDefaultShippingAddressAction = {
          action: 'setDefaultShippingAddress',
          addressId: id
        };
        userData.actions.push(action);
      } else if (isUpdate && addresses[updateId].isDefaultShipping) {
        const action: MyCustomerSetDefaultShippingAddressAction = {
          action: 'setDefaultShippingAddress',
          addressId: undefined
        };
        userData.actions.push(action);
      }
    },
    [
      addresses,
      data.isDefaultBillingAddress,
      data.isDefaultShippingAddress,
      isBillingAddress,
      isShippingAddress,
      updateId
    ]
  );

  const handleToggleBilling = (): void => {
    setIsBillingAddress((value) => !value);
  };

  const handleToggleShipping = (): void => {
    setIsShippingAddress((value) => !value);
  };

  const handleSaveUpdate = useCallback(async () => {
    setIsShowAlert(true);
    try {
      const localToken = localStorage.getItem(KEY_AUTH_USER_TOKEN);
      if (localToken !== '') {
        const userData: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'changeAddress',
              addressId: addresses[updateId].id,
              address: {
                country: data.inputsValues[INPUTS.shippingCountry.name]!,
                postalCode: data.inputsValues[INPUTS.shippingPostalCode.name],
                city: data.inputsValues[INPUTS.shippingCity.name],
                streetName: data.inputsValues[INPUTS.shippingStreet.name]
              }
            }
          ]
        };
        processCheckbox(userData, addresses[updateId].id, true)();
        await eCommerceAPI.updateUser(localToken as string, userData).then(() => {
          setIsShowCircleProgress(false);
          setAlertData({
            typeAlert: Alerts.SUCCESS,
            textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
          });
        });
        clearValues();
        setUpdateId(-1);
        setIsActualData(false);
      }
    } catch (error) {
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.ERROR,
        textAlert: AlertsText.ERROR_UPDATE_USER
      });
      console.error('Error update user data:', error);
    }
  }, [
    setIsShowAlert,
    version,
    addresses,
    updateId,
    data.inputsValues,
    processCheckbox,
    clearValues,
    setIsActualData,
    setIsShowCircleProgress,
    setAlertData
  ]);

  const handleDelete = useCallback(
    (index: number) => async (): Promise<void> => {
      setIsShowAlert(true);
      try {
        const localToken = localStorage.getItem(KEY_AUTH_USER_TOKEN);
        if (localToken !== '') {
          const userData: MyCustomerUpdate = {
            version,
            actions: [
              {
                action: 'removeAddress',
                addressId: addresses[index].id
              }
            ]
          };
          await eCommerceAPI.updateUser(localToken as string, userData).then(() => {
            setIsShowCircleProgress(false);
            setAlertData({
              typeAlert: Alerts.SUCCESS,
              textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
            });
          });
          setIsActualData(false);
        }
      } catch (error) {
        setIsShowCircleProgress(false);
        setAlertData({
          typeAlert: Alerts.ERROR,
          textAlert: AlertsText.ERROR_UPDATE_USER
        });
        console.error('Error update user data:', error);
      }
    },
    [addresses, setAlertData, setIsActualData, setIsShowAlert, setIsShowCircleProgress, version]
  );

  const handleAddNew = useCallback(() => {
    clearValues();
    setUpdateId(-1);
    setIsAddMode(true);
  }, [clearValues]);

  const handleUpdate = useCallback(
    (index: number) => (): void => {
      data.setInputsValues((values) => ({
        ...values,
        [INPUTS.shippingCity.name]: addresses[index].addressData.city,
        [INPUTS.shippingCountry.name]: addresses[index].addressData.country,
        [INPUTS.shippingPostalCode.name]: addresses[index].addressData.postalCode,
        [INPUTS.shippingStreet.name]: addresses[index].addressData.streetName
      }));
      data.setIsDefaultBillingAddress(addresses[index].isDefaultBilling);
      data.setIsDefaultShippingAddress(addresses[index].isDefaultShipping);
      setIsShippingAddress(addresses[index].isShipping);
      setIsBillingAddress(addresses[index].isBilling);
      setIsAddMode(false);
      setUpdateId(index);
    },
    [addresses, data]
  );

  const handleCancelUpdate = useCallback(() => {
    clearValues();
    setUpdateId(-1);
  }, [clearValues]);

  const handleSaveAdd = useCallback(async () => {
    setIsShowAlert(true);
    try {
      const localToken = localStorage.getItem(KEY_AUTH_USER_TOKEN);
      if (localToken !== '') {
        const userData: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'addAddress',
              address: {
                country: data.inputsValues[INPUTS.shippingCountry.name]!,
                postalCode: data.inputsValues[INPUTS.shippingPostalCode.name],
                city: data.inputsValues[INPUTS.shippingCity.name],
                streetName: data.inputsValues[INPUTS.shippingStreet.name]
              }
            }
          ]
        };
        await eCommerceAPI.updateUser(localToken as string, userData).then(async (response) => {
          const newUserData: MyCustomerUpdate = {
            version: response.body.version,
            actions: []
          };
          const newAddress = response.body.addresses.filter(
            (address: IResponseAddressData) => !addresses.map((oldAddress) => oldAddress.id).includes(address.id)
          );
          processCheckbox(newUserData, newAddress[0].id, false)();
          await eCommerceAPI.updateUser(localToken as string, newUserData).then(() => {
            setIsShowCircleProgress(false);
            setAlertData({
              typeAlert: Alerts.SUCCESS,
              textAlert: AlertsText.SUCCESS_TEXT_UPDATE_USER
            });
          });
          setIsActualData(false);
          clearValues();
          setIsAddMode(false);
        });
      }
    } catch (error) {
      setIsShowCircleProgress(false);
      setAlertData({
        typeAlert: Alerts.ERROR,
        textAlert: AlertsText.ERROR_UPDATE_USER
      });
      console.error('Error update user data:', error);
    }
    setIsAddMode(false);
  }, [
    addresses,
    clearValues,
    data.inputsValues,
    processCheckbox,
    setAlertData,
    setIsActualData,
    setIsShowAlert,
    setIsShowCircleProgress,
    version
  ]);

  const handleCancelAdd = useCallback(() => {
    clearValues();
    setIsAddMode(false);
  }, [clearValues]);

  return {
    updateId,
    isShippingAddress,
    isBillingAddress,
    isAddMode,
    handleToggleBilling,
    handleToggleShipping,
    handleSaveUpdate,
    handleCancelUpdate,
    handleUpdate,
    handleSaveAdd,
    handleCancelAdd,
    handleAddNew,
    handleDelete
  };
};
