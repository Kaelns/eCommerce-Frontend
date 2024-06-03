import { FormControlLabel, Checkbox } from '@mui/material';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses } from '@/features/UserProfile/UserProfile.interface';

export default function CheckboxBlock({
  data,
  address,
  disabled,
  handleToggleBilling,
  handleToggleShipping
}: {
  data: IUseRegistrationFormReturn;
  disabled: boolean;
  handleToggleBilling: () => void;
  handleToggleShipping: () => void;
  address?: IAddresses;
}): React.ReactNode {
  return (
    <>
      <FormControlLabel
        control={<Checkbox disabled={disabled} checked={address?.isBilling} onChange={handleToggleBilling} />}
        label="Billing address"
      />
      <FormControlLabel
        control={<Checkbox disabled={disabled} checked={address?.isShipping} onChange={handleToggleShipping} />}
        label="Shipping address"
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={address?.isDefaultBilling}
            onChange={data.handleToggleDefaultBilling}
          />
        }
        label="Default billing address"
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={address?.isDefaultShipping}
            onChange={data.handleToggleDefaultShipping}
          />
        }
        label="Default shipping address"
      />
    </>
  );
}
