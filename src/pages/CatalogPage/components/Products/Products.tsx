import { Box } from '@mui/material';

interface IProductsProps {
  className: string;
}
export function Products({ className }: IProductsProps): React.ReactNode {
  return <Box className={className} />;
}
