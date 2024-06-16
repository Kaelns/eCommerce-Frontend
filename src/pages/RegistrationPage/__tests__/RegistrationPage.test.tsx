import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { render } from '@testing-library/react';

describe('Given RegistrationPage component', () => {
  it('When rendered, should match snapshot', () => {
    const { asFragment } = render(<RegistrationPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
