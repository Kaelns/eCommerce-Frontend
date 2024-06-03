import { useEffect, useState } from 'react';
import { useRegistrationForm } from '@/features/AuthorizationForms/RegistrationForm/hooks/useRegistrationForm';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import AddressesPart from '@/features/UserProfile/AddressesPart';
import CredentialPart from '@/features/UserProfile/CredentialPart';
import PersonalPart from '@/features/UserProfile/PersonalPart';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddresses, IResponseAddressData } from '@/features/UserProfile/UserProfile.interface';

export default function UserProfile(): React.ReactNode {
  const data = useRegistrationForm();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [addresses, setAddresses] = useState<IAddresses[]>([]);
  useEffect(() => {
    async function getUserData(): Promise<void> {
      try {
        const response = await eCommerceAPI.getUser();
        console.log(response.body);
        data.setInputsValues((values) => ({
          ...values,
          [INPUTS.firstName.name]: response.body.firstName,
          [INPUTS.lastName.name]: response.body.lastName,
          [INPUTS.birthday.name]: response.body.dateOfBirth,
          [INPUTS.email.name]: response.body.email
        }));
        console.log(response.body.addresses);
        const addressList: IAddresses[] = [];
        response.body.addresses.forEach((item: IResponseAddressData) => {
          const addressData = {
            city: item.city,
            country: item.country,
            postalCode: item.postalCode,
            streetName: item.streetName
          };
          const address: IAddresses = {
            id: item.id,
            addressData,
            isBilling: response.body.billingAddressIds.includes(item.id),
            isShipping: response.body.shippingAddressIds.includes(item.id),
            isDefaultBilling: response.body.defaultBillingAddress === item.id,
            isDefaultShipping: response.body.defaultShippingAddress === item.id
          };
          addressList.push(address);
        });
        setAddresses(addressList);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    if (isDataLoaded === false) {
      getUserData();
      setIsDataLoaded(true);
    }
  }, [data, isDataLoaded, addresses]);

  return (
    <>
      <PersonalPart data={data} />
      <CredentialPart data={data} />
      <AddressesPart data={data} addresses={addresses} />
    </>
  );
}
