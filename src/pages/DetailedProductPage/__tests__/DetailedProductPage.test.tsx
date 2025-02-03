import { DetailedProductPage } from '@/pages/DetailedProductPage/DetailedProductPage';
import { render } from '@testing-library/react';

describe('Given DetailedProductPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<DetailedProductPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
