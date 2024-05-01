import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to eCommerce Application/i);
  expect(linkElement).toBeInTheDocument();
});
