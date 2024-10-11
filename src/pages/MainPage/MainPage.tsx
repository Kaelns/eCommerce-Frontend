import { Stack } from '@mui/system';
import { MainSection } from '@/pages/MainPage/components/MainSection';
// import { ShowcaseSection } from '@/pages/MainPage/components/ShowcaseSection';
import { SpecialSection } from '@/pages/MainPage/components/SpecialSection';

export function MainPage(): React.ReactNode {
  // const { categories } = useContext(ECommerceContext);

  return (
    <Stack gap={5}>
      <MainSection />
      {/* <ShowcaseSection categoryKey={categories[0]?.key ?? ''} /> */}
      {/* <ShowcaseSection categoryKey={categories[1]?.key ?? ''} /> */}
      <SpecialSection />
    </Stack>
  );
}
