import { Title } from '@/components/ui/Title';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';

export function MainPage(): JSX.Element {
  return (
    <>
      <Title>Main page</Title>
      <Navbar navbarType={Navbars.MAIN} />
    </>
  );
}
