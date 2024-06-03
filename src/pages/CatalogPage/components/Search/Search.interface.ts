import { InputBaseProps } from '@mui/material';

export interface ISearchProps extends InputBaseProps {
  setIsSearchInFocus: React.Dispatch<React.SetStateAction<boolean>>;
}
