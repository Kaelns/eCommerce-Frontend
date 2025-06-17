import type { PropsWithChildren } from '@/shared/model/types';
import type { Theme, SxProps, ModalProps } from '@mui/material';

import { useCallback } from 'react';
import { Modal } from '@mui/material';

import { selectIsOpenScaledImageModal, setIsOpenScaledImageModalAction } from '@/pages/DetailedProductPage/model/detailedProductPage.slice';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxModal: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export function ScaledImageModal({ children }: PropsWithChildren<Omit<ModalProps, 'open'>>) {
  const dispatch = useAppDispatch();

  const isOpenModal = useAppSelector(selectIsOpenScaledImageModal);

  const handleClose = useCallback(() => dispatch(setIsOpenScaledImageModalAction(false)), [dispatch]);

  return (
    <Modal open={isOpenModal} onClose={handleClose} sx={sxModal}>
      {children}
    </Modal>
  );
}
