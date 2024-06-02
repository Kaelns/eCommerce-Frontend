import { useEffect } from 'react';
import { useRegistrationForm } from '@/features/AuthorizationForms/RegistrationForm/hooks/useRegistrationForm';
import { INPUTS } from '@/features/AuthorizationForms/data/AuthorizationForms.constants';
import AddressesPart from '@/features/UserProfile/AddressesPart';
import CredentialPart from '@/features/UserProfile/CredentialPart';
import PersonalPart from '@/features/UserProfile/PersonalPart';
import { eCommerceAPI } from '@/services/ECommerceAPI';

export default function UserProfile(): React.ReactNode {
  const data = useRegistrationForm();
  useEffect(() => {
    async function getUserData(): Promise<void> {
      try {
        const response = await eCommerceAPI.getUser();
        console.log(response.body);
        data.setInputsValues((values) => ({
          ...values,
          [INPUTS.firstName.name]: response.body.firstName,
          [INPUTS.lastName.name]: response.body.lastName,
          [INPUTS.birthday.name]: response.body.birthday,
          [INPUTS.email.name]: response.body.email
        }));
        console.log(data.inputsValues);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <PersonalPart data={data} />
      <CredentialPart data={data} />
      <AddressesPart />
    </>
  );
}
