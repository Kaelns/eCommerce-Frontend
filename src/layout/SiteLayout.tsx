import { Header } from '@/layout/Header';
import { MainContainer } from '@/layout/MainContainer';

export function SiteLayout(): React.ReactNode {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}
