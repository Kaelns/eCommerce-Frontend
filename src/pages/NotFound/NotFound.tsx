import { Link } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <div>
      <h2>404: Page is not found</h2>
      <h3>Go to main page:</h3>
      <Link to="/">Main page</Link>
    </div>
  );
}
