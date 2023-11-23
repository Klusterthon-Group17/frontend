import { useRoutes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import { Suspense, lazy } from 'react';
import { RouteEnum } from './constant/RouteConstant';
import Loading from './common/Loading';
import { Container } from '@mui/material';

const HomePage = lazy(() => import('./pages/HomePage'));
const SigninPage = lazy(() => import('./pages/SigninPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));

function App() {
  const routes = useRoutes(ROUTES);

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Container className='my-10'>{routes}</Container>
    </Suspense>
  );
}

export default App;

const ROUTES = [
  { path: RouteEnum.HOME, element: <HomePage /> },
  { path: RouteEnum.SIGNIN, element: <SigninPage /> },
  { path: RouteEnum.SIGNUP, element: <SignupPage /> },
];
