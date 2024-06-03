import { useCallback, useState } from 'react';

import { Button } from '@mui/material';
import { Title } from '@/components/Title/Title';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses } from '@/features/UserProfile/UserProfile.interface';
import styles from './UserProfile.module.scss';
import CheckboxBlock from '@/features/UserProfile/CheckboxBlock';
import Address from '@/features/UserProfile/Address';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';

export default function AddressesPart({
  data,
  addresses
}: {
  data: IUseRegistrationFormReturn;
  addresses: IAddresses[];
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
    (index: number) => (): void => {
      setUpdateId(index);
      data.setInputsValues((values) => ({
        ...values,
        [INPUTS.shippingCity.name]: addresses[index].addressData.city,
        [INPUTS.shippingCountry.name]: addresses[index].addressData.country,
        [INPUTS.shippingPostalCode.name]: addresses[index].addressData.postalCode,
        [INPUTS.shippingStreet.name]: addresses[index].addressData.streetName
      }));
      setIsAddMode(false);
    },
    [data, addresses]
  );
  const handleDelete = useCallback(
    (index: number) => (): void => {
      // TODO delete this address
      // console.log(addresses[index]);
    },
    []
  );

  const handleAddNew = (): void => {
    setUpdateId(-1);
    setIsAddMode(true);
  };

  const handleSaveUpdate = (): void => {
    setIsAddMode(true);
  };

  const handleCancelUpdate = (): void => {
    setUpdateId(-1);
  };

  const handleSaveAdd = (): void => {
    // TODO save new address
    /*  console.log(data.inputsValues[INPUTS.shippingCountry.name]);
    console.log(data.inputsValues[INPUTS.shippingCity.name]);
    console.log(data.inputsValues[INPUTS.shippingPostalCode.name]);
    console.log(data.inputsValues[INPUTS.shippingStreet.name]);
    console.log(isBillingAddress);
    console.log(isShippingAddress);
    console.log(data.isDefaultBillingAddress);
    console.log(data.isDefaultShippingAddress); */
    setIsAddMode(false);
  };

  const handleCancelAdd = (): void => {
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
            <>
              <p
                key={address.id}
              >{`${index + 1} ${address.addressData.country} ${address.addressData.city} ${address.addressData.streetName} ${address.addressData.postalCode}`}</p>
              <CheckboxBlock
                address={address}
                disabled={!(updateId === index)}
                data={data}
                handleToggleBilling={handleToggleBilling}
                handleToggleShipping={handleToggleShipping}
              />
              <Button variant="outlined" onClick={handleUpdate(index)}>
                Update
              </Button>
            </>
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
