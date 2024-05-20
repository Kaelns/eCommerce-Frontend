import { render } from '@testing-library/react';
import { MainPage } from '@/pages/MainPage/MainPage';

describe('Given MainPage component', () => {
  it.skip('When rendered, should match snapshot', () => {
    const { asFragment } = render(<MainPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
