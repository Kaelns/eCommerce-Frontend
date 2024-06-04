import { FormControlLabel, Checkbox } from '@mui/material';
import { IUseRegistrationFormReturn } from '@/features/AuthorizationForms/RegistrationForm/data/RegistrationForm.interface';
import { IAddresses } from '@/features/UserProfile/UserProfile.interface';

export default function CheckboxBlock({
  data,
  address,
  disabled,
  isShipping,
  isBilling,
  handleToggleBilling,
  handleToggleShipping
}: {
  data: IUseRegistrationFormReturn;
  disabled: boolean;
  isShipping: boolean;
  isBilling: boolean;
  handleToggleBilling: () => void;
  handleToggleShipping: () => void;
  address?: IAddresses;
}): React.ReactNode {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={disabled ? address?.isBilling : isBilling}
            onChange={handleToggleBilling}
          />
        }
        label="Billing address"
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={disabled ? address?.isShipping : isShipping}
            onChange={handleToggleShipping}
          />
        }
        label="Shipping address"
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={disabled ? address?.isDefaultBilling : data.isDefaultBillingAddress}
            onChange={data.handleToggleDefaultBilling}
          />
        }
        label="Default billing address"
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={disabled}
            checked={disabled ? address?.isDefaultShipping : data.isDefaultShippingAddress}
            onChange={data.handleToggleDefaultShipping}
          />
        }
        label="Default shipping address"
      />
    </>
  );
}
