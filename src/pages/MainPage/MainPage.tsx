import { Title } from '@/components/ui/Title';
import { Navbar } from '@/layout/Navbar/Navbar';
import { Navbars } from '@/layout/Navbar/data/Navbar.enum';

export function MainPage(): React.ReactNode {
  return (
    <>
      <Title>Main page</Title>
      <Navbar navbarType={Navbars.MAIN} />
    </>
  );
}
