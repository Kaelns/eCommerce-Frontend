import { Stack } from '@mui/system';
import { MainSection } from '@/pages/MainPage/components/MainSection';
// import { ShowcaseSection } from '@/pages/MainPage/components/ShowcaseSection';
import { SpecialSection } from '@/pages/MainPage/components/SpecialSection';
import { useGetCategoriesQuery } from '@/services/ecommerce-api';
import { SuspenseWithError } from '@/components/SuspenseWithError';

export function MainPage(): React.ReactNode {
  const { /* data: categories, */ isLoading, isError /* , error */ } = useGetCategoriesQuery();

  return (
    <SuspenseWithError settings={{ isLoading, isError }}>
      <Stack gap={5}>
        <MainSection />
        {/* <ShowcaseSection categoryKey={categories[0]?.key ?? ''} /> */}
        {/* <ShowcaseSection categoryKey={categories[1]?.key ?? ''} /> */}
        <SpecialSection />
      </Stack>
    </SuspenseWithError>
  );
}
