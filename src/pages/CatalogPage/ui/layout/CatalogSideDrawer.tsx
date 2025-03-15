import type { PropsWithChildren } from '@/shared/model/types';

import { Drawer } from '@mui/material';

import { selectIsOpenFilterDrawer, setIsOpenFilterDrawerAction } from '@/pages/CatalogPage/model/catalogPage.slice';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

export function CatalogSideDrawer({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  const isOpenFilterDrawer = useAppSelector(selectIsOpenFilterDrawer);

  const handleCloseSideDrawer = () => {
    dispatch(setIsOpenFilterDrawerAction(false));
  };

  return (
    <Drawer anchor="right" open={isOpenFilterDrawer} onClose={handleCloseSideDrawer}>
      {children}
    </Drawer>
  );
}
