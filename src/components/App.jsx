// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import  lazy  from 'react';
import { Route, Routes }  from 'react-router-dom';
import Layout from './Layout';
import NotFoundPage from '../page/NotPage';


const HomePage = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const Details = lazy(() => import('../page/Details'));
const Cast = lazy(() => import('../page/Cast'));
const Reviews = lazy(() => import('../page/Reviews'));


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}