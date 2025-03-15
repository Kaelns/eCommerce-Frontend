import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { App } from '@/app/ui/App';
// eslint-disable-next-line import/no-cycle
import { store } from '@/app/store/store';
import { RedirectLoginRouter } from '@/app/router/ui/RedirectLoginRouter';
import { prefetchStartSessionLoader } from '@/app/model/prefetchStartSession.loader';

import { MainPage } from '@/pages/MainPage';
import { UserPage } from '@/pages/UserPage';
import { CartPage } from '@/pages/CartPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { LoginPage } from '@/pages/LoginPage';
import { AboutUsPage } from '@/pages/AboutUsPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage';
import { CatalogPage, prefetchCatalogPageLoader } from '@/pages/CatalogPage';

import { Paths } from '@/shared/model/data';

/**
 * This promise is used to avoid errors with using the store in the router while passing the router to the store via extraArguments
 *  */
export const loadStore = new Promise<typeof store>((res) => {
  setTimeout(() => res(store), 0);
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} loader={prefetchStartSessionLoader}>
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.CATALOG} element={<CatalogPage />} loader={prefetchCatalogPageLoader} />
      <Route path={Paths.ABOUT_US} element={<AboutUsPage />} />
      <Route path={Paths.DETAILED_PRODUCT}>
        <Route path={Paths.DETAILED_PRODUCT_ID} element={<DetailedProductPage />} />
      </Route>
      <Route path={Paths.USER} element={<RedirectLoginRouter IfLogged={<UserPage />} IfUnLogged={<Navigate to={Paths.LOGIN} />} />} />
      <Route path={Paths.LOGIN} element={<RedirectLoginRouter IfLogged={<Navigate to={Paths.MAIN} />} IfUnLogged={<LoginPage />} />} />
      <Route path={Paths.CART} element={<RedirectLoginRouter IfLogged={<CartPage />} IfUnLogged={<Navigate to={Paths.LOGIN} />} />} />
      <Route
        path={Paths.REGISTRATION}
        element={<RedirectLoginRouter IfLogged={<Navigate to={Paths.MAIN} />} IfUnLogged={<RegistrationPage />} />}
      />
      <Route path={Paths.NONEXISTENT} element={<ErrorPage />} />
    </Route>
  )
);
