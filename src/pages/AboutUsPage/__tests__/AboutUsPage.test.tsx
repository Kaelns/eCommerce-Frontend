import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { render } from '@testing-library/react';

describe('Given AboutUsPage component: ', () => {
  it('when rendered, should match snapshot', () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
