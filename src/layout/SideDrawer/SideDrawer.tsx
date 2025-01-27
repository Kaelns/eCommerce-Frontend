import { Drawer } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';
import type { UseSideDrawerReturn } from '@/layout/SideDrawer/types';

interface SideDrawerProps {
  data: Omit<UseSideDrawerReturn, 'openDrawer'>;
}

export function SideDrawer({ children, data }: PropsWithChildren<SideDrawerProps>): React.ReactNode {
  return (
    <Drawer anchor="right" open={data.isOpenDrawer} onClose={data.closeDrawer}>
      {children}
    </Drawer>
  );
}
