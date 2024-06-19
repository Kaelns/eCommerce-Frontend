import { MainPage } from '@/pages/MainPage/MainPage';
import { render } from '@testing-library/react';
import * as useAuthContextHook from '@/context/AuthContext/useAuthContext';

describe('Given MainPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const useMoviesSpy = vi.spyOn(useAuthContextHook, 'useAuthContext');

    useMoviesSpy.mockReturnValue({
      authTokens: {
        token: '',
        anonToken: ''
      },
      setAuthTokens: vi.fn()
    });

    const { asFragment } = render(<MainPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
