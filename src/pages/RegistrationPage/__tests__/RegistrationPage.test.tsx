import { AboutUsPage } from '@/pages/AboutUsPage/AboutUsPage';
import { render } from '@testing-library/react';

describe('Given MainPage component', () => {
  it('When rendered, should match snapshot of AboutUsPage', () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
