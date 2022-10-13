import { Navigation } from './AppBarInfo.styled';

export default function AppBarInfo() {
  return (
    <header>
      <nav>
        <Navigation to="/">Home</Navigation>
        <Navigation to="/movies">Movies</Navigation>
      </nav>
    </header>
  );
}