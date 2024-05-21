import { render } from '@testing-library/react';
import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { UserPage } from '@/pages/UserPage/UserPage';
import * as useAuthContextHook from '@/context/AuthContext/useAuthContext';

const mockedUseNavigate = vi.fn();
const mockedUseLocation = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
    useLocation: () => mockedUseLocation
  };
});

describe('Given MainPage component', () => {
  it('When rendered, should match snapshot of AboutUsPage', () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of BasketPage', () => {
    const { asFragment } = render(<BasketPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of CatalogPage', () => {
    const { asFragment } = render(<CatalogPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of DetailedProductPage', () => {
    const { asFragment } = render(<DetailedProductPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of ErrorPage', () => {
    const { asFragment } = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of LoginPage', () => {
    const useMoviesSpy = vi.spyOn(useAuthContextHook, 'useAuthContext');

    useMoviesSpy.mockReturnValue({
      authUserToken: '',
      setAuthUserToken: vi.fn()
    });

    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of MainPage', () => {
    const { asFragment } = render(<MainPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('When rendered, should match snapshot of UserPage', () => {
    const { asFragment } = render(<UserPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
