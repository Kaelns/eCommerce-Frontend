import { Outlet } from 'react-router-dom';
import styles from './MainContainer.module.scss';
import { SectionContainer } from '@/layout/SectionContainer/SectionContainer';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainContainer({ className = '' }: IProps): JSX.Element {
  return (
    <main className={[styles.main, className].join(' ')}>
      <SectionContainer>
        <Outlet />
      </SectionContainer>
    </main>
  );
}
