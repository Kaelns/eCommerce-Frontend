import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useRegistrationForm } from '@/features/AuthorizationForms/RegistrationForm/hooks/useRegistrationForm';
import AddressesPart from '@/features/UserProfile/AddressesPart';
import CredentialPart from '@/features/UserProfile/CredentialPart';
import PersonalPart from '@/features/UserProfile/PersonalPart';
import { eCommerceAPI } from '@/services/ECommerceAPI';
import { IAddresses, IResponseAddressData, IResponseUserData } from '@/features/UserProfile/UserProfile.interface';
import getMaxDate from '@/utils/getMaxDate';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';

export default function UserProfile(): React.ReactNode {
  const data = useRegistrationForm();

  const [initialValues, setInitialValues] = useState<IResponseUserData>({
    birthday: dayjs(getMaxDate()).format('YYYY-MM-DD'),
    lastName: '',
    firstName: '',
    email: '',
    version: -1
  });
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [addresses, setAddresses] = useState<IAddresses[]>([]);
  useEffect(() => {
    async function getUserData(): Promise<void> {
      try {
        const localToken = localStorage.getItem('Token');
        if (localToken !== '') {
          const response = await eCommerceAPI.getUser(localToken as string);
          console.log(response.body);
          setInitialValues({
            birthday: response.body.dateOfBirth,
            lastName: response.body.lastName,
            firstName: response.body.firstName,
            email: response.body.email,
            version: response.body.version
          });
          data.setInputsValues((values) => ({
            ...values,
            [INPUTS.birthday.name]: response.body.dateOfBirth
          }));
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
              isDefaultBilling: response.body.defaultBillingAddressId === item.id,
              isDefaultShipping: response.body.defaultShippingAddressId === item.id
            };
            addressList.push(address);
          });
          setAddresses(addressList);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    if (isDataLoaded === false) {
      getUserData();
      setIsDataLoaded(true);
    }
  }, [isDataLoaded, addresses, data]);

  return (
    <>
      <PersonalPart data={data} initialValues={initialValues} setIsActualData={setIsDataLoaded} />
      <CredentialPart data={data} initialValues={initialValues} setIsActualData={setIsDataLoaded} />
      <AddressesPart
        data={data}
        addresses={addresses}
        version={initialValues.version}
        setIsActualData={setIsDataLoaded}
      />
    </>
  );
}
