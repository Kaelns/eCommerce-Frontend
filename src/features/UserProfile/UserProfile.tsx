import { useEffect, useState } from 'react';
import { useRegistrationForm } from '@/features/AuthorizationForms/RegistrationForm/hooks/useRegistrationForm';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import AddressesPart from '@/features/UserProfile/AddressesPart';
import CredentialPart from '@/features/UserProfile/CredentialPart';
import PersonalPart from '@/features/UserProfile/PersonalPart';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddresses } from '@/features/UserProfile/UserProfile.interface';

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
        response.body.addresses.forEach((item) => {
          let address: IAddresses;
          address.id = item.id;
          address.addressData.city = item.city;
          address.addressData.country = item.country;
          address.addressData.postalCode = item.postalCode;
          address.addressData.street = item.streetName;
        });
        console.log(data.inputsValues);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    if (isDataLoaded === false) {
      getUserData();
      setIsDataLoaded(true);
    }
  }, [data, isDataLoaded]);

  return (
    <>
      <PersonalPart data={data} />
      <CredentialPart data={data} />
      <AddressesPart />
    </>
  );
}
