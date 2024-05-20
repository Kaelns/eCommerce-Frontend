import { render } from '@testing-library/react';

import { UserPage } from '@/pages/UserPage/UserPage';

describe('Given UserPage component', () => {
  it('When rendered, should match snapshot', () => {
    const { asFragment } = render(<UserPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
