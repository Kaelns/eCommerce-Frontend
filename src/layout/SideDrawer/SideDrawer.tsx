import { Drawer } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';

export interface IUseSideDrawerReturn {
  isOpenDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface ISideDrawerProps {
  data: IUseSideDrawerReturn;
}

export function SideDrawer({ children, data }: PropsWithChildren<ISideDrawerProps>): React.ReactNode {
  return (
    <Drawer anchor="right" open={data.isOpenDrawer} onClose={data.closeDrawer}>
      {children}
    </Drawer>
  );
}
