import { UserPage } from '@/pages/UserPage/UserPage';
import { render } from '@testing-library/react';

describe('Given UserPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<UserPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
