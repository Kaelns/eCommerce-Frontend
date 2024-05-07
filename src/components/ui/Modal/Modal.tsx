import { createPortal } from 'react-dom';
import { MouseEventHandler, MouseEvent } from 'react';
import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';
import styles from './Modal.module.scss';

interface IProps {
  show: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const portalDiv = document.getElementById('modal') as HTMLElement;

export function Modal({ children, show, onClick }: ComponentPropsWithChildren<IProps>): React.ReactPortal {
  const classNameOnShow = show ? styles.active : '';

  const handlePropagation = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  return createPortal(
    <div className={`${styles.modal} ${classNameOnShow}`} onClick={onClick}>
      <div className={`${styles.modal__content} ${classNameOnShow}`} onClick={handlePropagation}>
        {children}
      </div>
    </div>,
    portalDiv
  );
}
