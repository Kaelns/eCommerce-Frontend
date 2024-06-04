import { useCallback, useState } from 'react';

import { Button } from '@mui/material';
import { MyCustomerUpdate } from '@commercetools/platform-sdk';
import { Title } from '@/components/Title/Title';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses } from '@/features/UserProfile/UserProfile.interface';
import styles from './UserProfile.module.scss';
import CheckboxBlock from '@/features/UserProfile/CheckboxBlock';
import Address from '@/features/UserProfile/Address';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import { COUNTRY_LIST } from '@/features/AuthorizationForms/components/AddressSection/AddressSection.constants';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export default function AddressesPart({
  data,
  addresses,
  version
}: {
  data: IUseRegistrationFormReturn;
  addresses: IAddresses[];
  version: number;
}): React.ReactNode {
  const [isBillingAddress, setIsBillingAddress] = useState(false);
  const [isShippingAddress, setIsShippingAddress] = useState(false);
  const [updateId, setUpdateId] = useState(-1);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleToggleBilling = (): void => {
    setIsBillingAddress((value) => !value);
  };

  const handleToggleShipping = (): void => {
    setIsShippingAddress((value) => !value);
  };

  const handleUpdate = useCallback(
    (index: number) => async (): Promise<void> => {
      setUpdateId(index);
      try {
        const localToken = localStorage.getItem('Token');
        if (localToken !== '') {
          const userData: MyCustomerUpdate = {
            version,
            actions: [
              {
                action: 'changeAddress',
                addressId: addresses[index].id,
                address: {
                  country: '',
                  postalCode: '',
                  city: '',
                  streetName: ''
                }
              }
            ]
          };

          // if (isBillingAddress) {
          //   const action = {
          //     action: 'addBillingAddressId',
          //     addressId: addresses[index].id
          //   };
          //   userData.actions.push(action);
          // }

          // if (isDeafultBilling) {
          //   const action = {
          //     action: 'setDefaultBillingAddress',
          //     addressId: addresses[index].id
          //   };
          //   userData.actions.push(action);
          // }

          // if (isShippingAddress) {
          //   const action = {
          //     action: 'addShippingAddressId',
          //     addressId: addresses[index].id
          //   };
          //   userData.actions.push(action);
          // }

          // if (isDeafultShippingAddress) {
          //   const action = {
          //     action: 'setDefaultShippingAddress',
          //     addressId: addresses[index].id
          //   };
          //   userData.actions.push(action);
          // }
          const response = await eCommerceAPI.updateUser(localToken as string, userData);
          console.log(response);
        }
      } catch (error) {
        console.error('Error update user data:', error);
      }
      data.setInputsValues((values) => ({
        ...values,
        [INPUTS.shippingCity.name]: addresses[index].addressData.city,
        [INPUTS.shippingCountry.name]: addresses[index].addressData.country,
        [INPUTS.shippingPostalCode.name]: addresses[index].addressData.postalCode,
        [INPUTS.shippingStreet.name]: addresses[index].addressData.streetName
      }));
      setIsAddMode(false);
    },
    [data, version, addresses]
  );
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
          console.log(response);
        }
      } catch (error) {
        console.error('Error update user data:', error);
      }
    },
    [addresses, version]
  );

  const handleAddNew = (): void => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.shippingCity.name]: undefined,
      [INPUTS.shippingCountry.name]: COUNTRY_LIST[0].code,
      [INPUTS.shippingPostalCode.name]: undefined,
      [INPUTS.shippingStreet.name]: undefined
    }));
    setUpdateId(-1);
    setIsAddMode(true);
  };

  const handleSaveUpdate = (): void => {
    setIsAddMode(true);
  };

  const handleCancelUpdate = (): void => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.shippingCity.name]: undefined,
      [INPUTS.shippingCountry.name]: COUNTRY_LIST[0].code,
      [INPUTS.shippingPostalCode.name]: undefined,
      [INPUTS.shippingStreet.name]: undefined
    }));
    setUpdateId(-1);
  };

  const handleSaveAdd = async (): Promise<void> => {
    // TODO save new address
    /*  console.log(data.inputsValues[INPUTS.shippingCountry.name]);
    console.log(data.inputsValues[INPUTS.shippingCity.name]);
    console.log(data.inputsValues[INPUTS.shippingPostalCode.name]);
    console.log(data.inputsValues[INPUTS.shippingStreet.name]);
    console.log(isBillingAddress);
    console.log(isShippingAddress);
    console.log(data.isDefaultBillingAddress);
    console.log(data.isDefaultShippingAddress); */
    try {
      const localToken = localStorage.getItem('Token');
      if (localToken !== '') {
        const userData: MyCustomerUpdate = {
          version,
          actions: [
            {
              action: 'addAddress',
              address: {
                key: '', // тут нужно задать свой ключ, чтобы потом по нему снизу изменить на те адреса,
                country: '', // на шипинг билинг или дефолтные
                postalCode: '',
                city: '',
                streetName: ''
              }
            }
          ]
        };

        // if (isBillingAddress) {
        //   const action = {
        //     action: 'addBillingAddressId',
        //     addressKey: ''
        //   };
        //   userData.actions.push(action);
        // }

        // if (isDeafultBilling) {
        //   const action = {
        //     action: 'setDefaultBillingAddress',
        //     addressKey: ''
        //   };
        //   userData.actions.push(action);
        // }

        // if (isShippingAddress) {
        //   const action = {
        //     action: 'addShippingAddressId',
        //     addressKey: ''
        //   };
        //   userData.actions.push(action);
        // }

        // if (isDeafultShippingAddress) {
        //   const action = {
        //     action: 'setDefaultShippingAddress',
        //     addressKey: ''
        //   };
        //   userData.actions.push(action);
        // }
        const response = await eCommerceAPI.updateUser(localToken as string, userData);
        console.log(response);
      }
    } catch (error) {
      console.error('Error update user data:', error);
    }
    setIsAddMode(false);
  };

  const handleCancelAdd = (): void => {
    data.setInputsValues((values) => ({
      ...values,
      [INPUTS.shippingCity.name]: undefined,
      [INPUTS.shippingCountry.name]: COUNTRY_LIST[0].code,
      [INPUTS.shippingPostalCode.name]: undefined,
      [INPUTS.shippingStreet.name]: undefined
    }));
    setIsAddMode(false);
  };

  return (
    <>
      <Title variant="h6" className={styles.title}>
        Addresses
      </Title>
      {addresses.map((address, index) => (
        <>
          {!(updateId === index) && (
            <div key={address.id}>
              <p>{`${index + 1} ${address.addressData.country} ${address.addressData.city} ${address.addressData.streetName} ${address.addressData.postalCode}`}</p>
              <CheckboxBlock
                address={address}
                disabled={!(updateId === index)}
                data={data}
                handleToggleBilling={handleToggleBilling}
                handleToggleShipping={handleToggleShipping}
              />
            </div>
          )}
          {!(updateId === index) && (
            <Button variant="outlined" onClick={handleUpdate(index)}>
              Update
            </Button>
          )}
          {updateId === index && (
            <Address
              address={address}
              data={data}
              handleCancel={handleCancelUpdate}
              handleSave={handleSaveUpdate}
              handleToggleBilling={handleToggleBilling}
              handleToggleShipping={handleToggleShipping}
            />
          )}
          <Button variant="outlined" onClick={handleDelete(index)}>
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
