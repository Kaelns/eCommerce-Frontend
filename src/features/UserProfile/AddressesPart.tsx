import { useCallback, useState } from 'react';

import { Button } from '@mui/material';
import {
  MyCustomerAddBillingAddressIdAction,
  MyCustomerAddShippingAddressIdAction,
  MyCustomerUpdate,
  MyCustomerSetDefaultBillingAddressAction,
  MyCustomerSetDefaultShippingAddressAction,
  MyCustomerRemoveBillingAddressIdAction,
  MyCustomerRemoveShippingAddressIdAction
} from '@commercetools/platform-sdk';
import { Title } from '@/components/typography/Title/Title';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses, IResponseAddressData } from '@/features/UserProfile/UserProfile.interface';
import styles from './UserProfile.module.scss';
import CheckboxBlock from '@/features/UserProfile/CheckboxBlock';
import Address from '@/features/UserProfile/Address';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { COUNTRY_LIST } from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export default function AddressesPart({
  data,
  addresses,
  version,
  setIsActualData
}: {
  data: IUseRegistrationFormReturn;
  addresses: IAddresses[];
  version: number;
  setIsActualData: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactNode {
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
    try {
      const localToken = localStorage.getItem('Token');
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
        const response = await eCommerceAPI.updateUser(localToken as string, userData);
        clearValues();
        setUpdateId(-1);
        setIsActualData(false);
        console.log(response);
      }
    } catch (error) {
      console.error('Error update user data:', error);
    }
  }, [version, addresses, updateId, data.inputsValues, processCheckbox, clearValues, setIsActualData]);

  const handleDelete = useCallback(
    (index: number) => async (): Promise<void> => {
      try {
        const localToken = localStorage.getItem('Token');
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
          const response = await eCommerceAPI.updateUser(localToken as string, userData);
          setIsActualData(false);
          console.log(response);
        }
      } catch (error) {
        console.error('Error update user data:', error);
      }
    },
    [addresses, setIsActualData, version]
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
    try {
      const localToken = localStorage.getItem('Token');
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
        const response = await eCommerceAPI.updateUser(localToken as string, userData);
        console.log(response);
        try {
          const newUserData: MyCustomerUpdate = {
            version: response.body.version,
            actions: []
          };
          const newAddress = response.body.addresses.filter(
            (address: IResponseAddressData) => !addresses.map((oldAddress) => oldAddress.id).includes(address.id)
          );
          processCheckbox(newUserData, newAddress[0].id, false)();
          const newResponse = await eCommerceAPI.updateUser(localToken as string, newUserData);
          console.log(newResponse);
          setIsActualData(false);
          clearValues();
          setIsAddMode(false);
        } catch (error) {
          console.error('Error update user data:', error);
        }
      }
    } catch (error) {
      console.error('Error update user data:', error);
    }
    setIsAddMode(false);
  }, [addresses, clearValues, data.inputsValues, processCheckbox, setIsActualData, version]);

  const handleCancelAdd = useCallback(() => {
    clearValues();
    setIsAddMode(false);
  }, [clearValues]);

  return (
    <>
      <Title variant="h6" className={styles.title}>
        Addresses
      </Title>
      {addresses.map((address, index) => (
        <>
          {!(updateId === index) && (
            <div key={address.id}>
              <p
                key={`Title ${address.id}`}
              >{`${index + 1} ${address.addressData.country} ${address.addressData.city} ${address.addressData.streetName} ${address.addressData.postalCode}`}</p>
              <CheckboxBlock
                key={`Checkbox ${address.id}`}
                address={address}
                disabled={!(updateId === index)}
                isBilling={isBillingAddress}
                isShipping={isShippingAddress}
                data={data}
                handleToggleBilling={handleToggleBilling}
                handleToggleShipping={handleToggleShipping}
              />
            </div>
          )}
          {!(updateId === index) && (
            <Button key={`Update ${address.id}`} variant="outlined" onClick={handleUpdate(index)}>
              Update
            </Button>
          )}
          {updateId === index && (
            <Address
              key={`Data ${address.id}`}
              address={address}
              data={data}
              isBilling={isBillingAddress}
              isShipping={isShippingAddress}
              handleCancel={handleCancelUpdate}
              handleSave={handleSaveUpdate}
              handleToggleBilling={handleToggleBilling}
              handleToggleShipping={handleToggleShipping}
            />
          )}
          <Button key={`Delete ${address.id}`} variant="outlined" onClick={handleDelete(index)}>
            Delete
          </Button>
        </>
      ))}
      {!isAddMode && (
        <Button variant="outlined" onClick={handleAddNew}>
          Add new
        </Button>
      )}
      {isAddMode && (
        <>
          <Title variant="h6" className={styles.title}>
            Add new address
          </Title>
          <Address
            data={data}
            isBilling={isBillingAddress}
            isShipping={isShippingAddress}
            handleCancel={handleCancelAdd}
            handleSave={handleSaveAdd}
            handleToggleBilling={handleToggleBilling}
            handleToggleShipping={handleToggleShipping}
          />
        </>
      )}
    </>
  );
}
