import OnChangeComboBox from '@/features/AuthorizationForms/components/ComboBox/ComboBox.type';

export interface IOptions {
  label: string;
  code: string;
  postalCodePattern: RegExp;
}

export interface IProps {
  id: string;
  label: string;
  name: string;
  options: Array<IOptions>;
  onChangeComboBox: OnChangeComboBox;
}
