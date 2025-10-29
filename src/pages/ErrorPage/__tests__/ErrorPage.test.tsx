import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { render } from '@testing-library/react';

describe('Given ErrorPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
