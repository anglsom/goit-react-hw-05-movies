import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarInfo from 'components/AppBarInfo';
import Container from 'components/Container';


export default function Layout() {
  return (
    <>
      <Container>
        <AppBarInfo />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}