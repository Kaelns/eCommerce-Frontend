import type { UseSideDrawerReturn } from '@/layout/SideDrawer/types';

import { useState } from 'react';

export function useSideDrawer(): UseSideDrawerReturn {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawer = (): void => {
    setIsOpenDrawer(true);
  };

  const closeDrawer = (): void => {
    setIsOpenDrawer(false);
  };

  return { isOpenDrawer, openDrawer, closeDrawer };
}
