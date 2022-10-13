import { Link } from 'react-router-dom';

export default function NotPage() {
  return (
    <h1>
      Page not found =(, go to <Link to="/">home page</Link>
    </h1>
  );
}