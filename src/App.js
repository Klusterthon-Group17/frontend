import { useRoutes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import { Suspense, lazy } from 'react';
import { RouteEnum } from './constant/RouteConstant';

function App() {
  const routes = useRoutes(ROUTES);
  return (
    <Suspense fallback={<p className='mt-[40%] md:mt-[25%]'>Loading...</p>}>
      <Navbar />
      {routes}
    </Suspense>
  );
}

export default App;

const ROUTES = [
  { path: RouteEnum.HOME, element: lazy(() => import('./pages/HomePage')) },
];
