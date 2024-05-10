import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main/Main';
import { Registration } from '@/pages/Registration/Registration';
import { Navbar } from '@/layout/Navbar/Navbar';
import { NotFound } from '@/pages/NotFound/NotFound';
import { MainContainer } from '@/layout/MainContainer/MainContainer';

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Without path is just container for all routes below. Use Outlet to insert child */}
        <Route element={<MainContainer />}>
          {/* element={<Main />} on parent Route tells us that that element will be on every page for childe route. Use Outlet to insert child */}
          <Route path="/" element={<Main />}>
            {/* <Route index element={<Main />}> Tells us that it element will be on parent path by default */}
            {/* <Route path=":animal" /> */}
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/error" />} />
        </Route>
      </Routes>
    </>
  );
}
