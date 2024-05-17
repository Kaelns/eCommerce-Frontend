import OnChangeComboBox from '@/data/types/ComboBoxFunction';

export interface IOptions {
  ['label']: string;
  ['code']: string;
}

export interface IProps {
  label: string;
  name: string;
  options: Array<IOptions>;
  onChangeComboBox: OnChangeComboBox;
}
