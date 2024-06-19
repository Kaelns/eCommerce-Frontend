import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { render } from '@testing-library/react';
import * as useAuthContextHook from '@/context/AuthContext/useAuthContext';

describe('Given LoginPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const useMoviesSpy = vi.spyOn(useAuthContextHook, 'useAuthContext');

    useMoviesSpy.mockReturnValue({
      authTokens: {
        token: '',
        anonToken: ''
      },
      setAuthTokens: vi.fn()
    });

    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
