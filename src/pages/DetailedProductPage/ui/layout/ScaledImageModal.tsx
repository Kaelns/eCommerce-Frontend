import type { ModalProps } from '@mui/material';
import type { PropsWithChildren } from '@/shared/model/types';

import { useCallback } from 'react';
import { Modal } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { selectIsOpenScaledImageModal, setIsOpenScaledImageModalAction } from '@/pages/DetailedProductPage/model/detailedProductPage.slice';

export function ScaledImageModal({ children }: PropsWithChildren<Omit<ModalProps, 'open'>>) {
  const dispatch = useAppDispatch();

  const isOpenModal = useAppSelector(selectIsOpenScaledImageModal);

  const handleClose = useCallback(() => dispatch(setIsOpenScaledImageModalAction(false)), [dispatch]);

  return (
    <Modal open={isOpenModal} onClose={handleClose}>
      {children}
    </Modal>
  );
}
