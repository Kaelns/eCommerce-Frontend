import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage/MainPage';
import { CartPage } from '@/pages/CartPage/CartPage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';

import { App } from '@/layout/App';
import { startSessionLoader } from '@/app/router/router.loaders';
import { RedirectLoginRouter } from '@/app/router/RedirectLoginRouter';

import { Paths } from '@/shared/data/enums';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} loader={startSessionLoader}>
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.CATALOG} element={<CatalogPage />}>
        <Route path={Paths.CATALOG_CATEGORY} />
      </Route>
      <Route path={Paths.ABOUT_US} element={<AboutUsPage />} />
      <Route path={Paths.DETAILED_PRODUCT}>
        <Route path={Paths.DETAILED_PRODUCT_ID} element={<DetailedProductPage />} />
      </Route>
      <Route path={Paths.USER} element={<RedirectLoginRouter IfLogged={<UserPage />} IfUnLogged={<Navigate to={Paths.LOGIN} />} />} />
      <Route path={Paths.LOGIN} element={<RedirectLoginRouter IfLogged={<Navigate to={Paths.MAIN} />} IfUnLogged={<LoginPage />} />} />
      <Route path={Paths.BASKET} element={<RedirectLoginRouter IfLogged={<CartPage />} IfUnLogged={<Navigate to={Paths.LOGIN} />} />} />
      <Route path={Paths.REGISTRATION} element={<RedirectLoginRouter IfLogged={<Navigate to={Paths.MAIN} />} IfUnLogged={<RegistrationPage />} />} />
      <Route path={Paths.NONEXISTENT} element={<ErrorPage />} />
    </Route>
  )
);
