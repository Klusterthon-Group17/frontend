import { useRoutes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import { Suspense, lazy } from 'react';
import { RouteEnum } from './constant/RouteConstant';
import Loading from './common/Loading';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  const routes = useRoutes(ROUTES);
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      {routes}
    </Suspense>
  );
}

export default App;

const ROUTES = [{ path: RouteEnum.HOME, element: <HomePage /> }];
