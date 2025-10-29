import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { render } from '@testing-library/react';

describe('Given CatalogPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<CatalogPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
