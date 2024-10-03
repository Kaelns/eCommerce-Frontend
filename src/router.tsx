import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { MainPage } from '@/pages/MainPage/MainPage';
// import { useRedirect } from '@/features/router/useRedirect';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { Paths } from '@/shared/constants';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { SiteLayout } from '@/layout/SiteLayout';

// TODO add redirect for pages

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SiteLayout />}>
      <Route path={Paths.MAIN} element={<MainPage />} />
      <Route path={Paths.CATALOG} element={<CatalogPage />}>
        <Route path={Paths.CATALOG_CATEGORY} />
      </Route>
      <Route path={Paths.ABOUT_US} element={<AboutUsPage />} />
      <Route path={Paths.DETAILED_PRODUCT}>
        <Route path={Paths.DETAILED_PRODUCT_ID} element={<DetailedProductPage />} />
      </Route>
      <Route path={Paths.USER} element={<UserPage />} />
      <Route path={Paths.LOGIN} element={<LoginPage />} />
      <Route path={Paths.BASKET} element={<BasketPage />} />
      <Route path={Paths.REGISTRATION} element={<RegistrationPage />} />
      <Route path={Paths.NONEXISTENT} element={<ErrorPage />} />
    </Route>
  )
);

// export function Router(): React.ReactNode {
//   const redirect = useRedirect();

//   return (
//     <Route element={<MainContainer />}>
//       <Route path={Paths.MAIN} element={<MainPage />} />
//       <Route path={Paths.CATALOG} element={<CatalogPage />}>
//         <Route path={Paths.CATALOG_CATEGORY} />
//       </Route>
//       <Route path={Paths.ABOUT_US} element={<AboutUsPage />} />
//       <Route path={Paths.DETAILED_PRODUCT}>
//         <Route path={Paths.DETAILED_PRODUCT_ID} element={<DetailedProductPage />} />
//       </Route>
//       <Route path={Paths.USER} element={redirect[Paths.USER]} />
//       <Route path={Paths.LOGIN} element={redirect[Paths.LOGIN]} />
//       <Route path={Paths.BASKET} element={<BasketPage />} />
//       <Route path={Paths.REGISTRATION} element={redirect[Paths.REGISTRATION]} />
//       <Route path={Paths.NONEXISTENT} element={<ErrorPage />} />
//     </Route>
//   );
// }
