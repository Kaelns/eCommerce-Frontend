import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { Header } from '@/layout/Header';
import { MainContainer } from '@/layout/MainContainer';
import { MainPage } from '@/pages/MainPage/MainPage';
import { useRedirect } from '@/features/Router/useRedirect';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { Paths } from '@/features/Router/Router.constants';

export function Router(): React.ReactNode {
  const redirect = useRedirect();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<MainContainer />}>
          <Route path={Paths.MAIN} element={<MainPage />} />
          <Route path={Paths.CATALOG} element={<CatalogPage />}>
            <Route path={Paths.CATALOG_CATEGORY} />
          </Route>
          <Route path={Paths.ABOUT_US} element={<AboutUsPage />} />
          <Route path={Paths.DETAILED_PRODUCT}>
            <Route path={Paths.DETAILED_PRODUCT_ID} element={<DetailedProductPage />} />
          </Route>
          <Route path={Paths.USER} element={redirect[Paths.USER]} />
          <Route path={Paths.LOGIN} element={redirect[Paths.LOGIN]} />
          <Route path={Paths.BASKET} element={<BasketPage />} />
          <Route path={Paths.REGISTRATION} element={redirect[Paths.REGISTRATION]} />
          <Route path={Paths.NONEXISTENT} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
