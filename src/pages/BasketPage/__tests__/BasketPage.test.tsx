import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { render } from '@testing-library/react';

describe('Given BasketPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<BasketPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
