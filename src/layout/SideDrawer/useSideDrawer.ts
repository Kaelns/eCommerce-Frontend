import { useState } from 'react';

export interface IUseSideDrawerReturn {
  isOpenDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

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
