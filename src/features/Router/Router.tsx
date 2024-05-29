import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { Header } from '@/layout/Header/Header';
import { MainContainer } from '@/layout/MainContainer/MainContainer';
import { MainPage } from '@/pages/MainPage/MainPage';
import { ROUTES } from '@/data/enum/routes.enum';
import { useRedirect } from '@/features/Router/hooks/useRedirect';

export function Router(): React.ReactNode {
  const redirect = useRedirect();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<MainContainer />}>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
          <Route path={ROUTES.DETAILED_PRODUCT} element={<DetailedProductPage />}>
            <Route path={ROUTES.DETAILED_PRODUCT_ID} />
          </Route>
          <Route path={ROUTES.USER} element={redirect[ROUTES.USER]} />
          <Route path={ROUTES.LOGIN} element={redirect[ROUTES.LOGIN]} />
          <Route path={ROUTES.BASKET} element={redirect[ROUTES.BASKET]} />
          <Route path={ROUTES.REGISTRATION} element={redirect[ROUTES.REGISTRATION]} />
          <Route path={ROUTES.NONEXISTENT} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
