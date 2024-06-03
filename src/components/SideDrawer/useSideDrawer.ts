import { useState } from 'react';
import { IUseSideDrawerReturn } from '@/components/SideDrawer/SideDrawer.interface';

export function useSideDrawer(): IUseSideDrawerReturn {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawer = (): void => {
    setIsOpenDrawer(true);
  };

  const closeDrawer = (): void => {
    setIsOpenDrawer(false);
  };

  return { isOpenDrawer, openDrawer, closeDrawer };
}
