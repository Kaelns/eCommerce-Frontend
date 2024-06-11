import React from 'react';
import { Button } from '@mui/material';

import { Title } from '@/components/typography/Title/Title';
import styles from '../UserProfile.module.scss';
import CheckboxBlock from '@/features/UserProfile/AddressPart/CheckboxBlock';
import Address from '@/features/UserProfile/AddressPart/Address';
import { IAddressPart } from '@/features/UserProfile/AddressPart/AddressesPart.interface';
import { useAddressPart } from '@/features/UserProfile/AddressPart/hooks/useAddressPart';

export default function AddressesPart({
  data,
  addresses,
  version,
  setIsActualData,
  setIsShowAlert,
  setIsShowCircleProgress,
  setAlertData
}: IAddressPart): React.ReactNode {
  const addressPartLogic = useAddressPart({
    data,
    addresses,
    version,
    setIsActualData,
    setIsShowAlert,
    setIsShowCircleProgress,
    setAlertData
  });

  return (
    <>
      <Title variant="h6" className={styles.title}>
        Addresses
      </Title>
      {addresses.map((address, index) => (
        <React.Fragment key={address.id}>
          {!(addressPartLogic.updateId === index) && (
            <div>
              <p>{`${index + 1} ${address.addressData.country} ${address.addressData.city} ${address.addressData.streetName} ${address.addressData.postalCode}`}</p>
              <CheckboxBlock
                address={address}
                disabled={!(addressPartLogic.updateId === index)}
                isBilling={addressPartLogic.isBillingAddress}
                isShipping={addressPartLogic.isShippingAddress}
                data={data}
                handleToggleBilling={addressPartLogic.handleToggleBilling}
                handleToggleShipping={addressPartLogic.handleToggleShipping}
              />
            </div>
          )}
          {!(addressPartLogic.updateId === index) && (
            <Button variant="outlined" onClick={addressPartLogic.handleUpdate(index)}>
              Update
            </Button>
          )}
          {addressPartLogic.updateId === index && (
            <Address
              address={address}
              data={data}
              isBilling={addressPartLogic.isBillingAddress}
              isShipping={addressPartLogic.isShippingAddress}
              handleCancel={addressPartLogic.handleCancelUpdate}
              handleSave={addressPartLogic.handleSaveUpdate}
              handleToggleBilling={addressPartLogic.handleToggleBilling}
              handleToggleShipping={addressPartLogic.handleToggleShipping}
            />
          )}
          <Button variant="outlined" onClick={addressPartLogic.handleDelete(index)}>
            Delete
          </Button>
        </React.Fragment>
      ))}
      {!addressPartLogic.isAddMode && (
        <Button variant="outlined" onClick={addressPartLogic.handleAddNew}>
          Add new
        </Button>
      )}
      {addressPartLogic.isAddMode && (
        <>
          <Title variant="h6" className={styles.title}>
            Add new address
          </Title>
          <Address
            data={data}
            isBilling={addressPartLogic.isBillingAddress}
            isShipping={addressPartLogic.isShippingAddress}
            handleCancel={addressPartLogic.handleCancelAdd}
            handleSave={addressPartLogic.handleSaveAdd}
            handleToggleBilling={addressPartLogic.handleToggleBilling}
            handleToggleShipping={addressPartLogic.handleToggleShipping}
          />
        </>
      )}
    </>
  );
}
