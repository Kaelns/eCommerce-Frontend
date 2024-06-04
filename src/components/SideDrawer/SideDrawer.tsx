import { Drawer } from '@mui/material';
import { ISideDrawerProps } from '@/components/SideDrawer/SideDrawer.interface';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

export function SideDrawer({ children, data }: PropsWithChildren<ISideDrawerProps>): React.ReactNode {
  return (
    <Drawer anchor="right" open={data.isOpenDrawer} onClose={data.closeDrawer}>
      {children}
    </Drawer>
  );
}
