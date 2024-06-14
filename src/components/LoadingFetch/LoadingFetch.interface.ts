import { BoxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ILoadingFetchProps {
  error: string;
  isLoading: boolean;
  Skeleton: (props: BoxProps) => ReactNode;
  className?: string;
}
