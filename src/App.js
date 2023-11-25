import { useRoutes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import { Suspense, lazy } from 'react';
import { RouteEnum } from './constant/RouteConstant';
import Loading from './common/Loading';

const HomePage = lazy(() => import('./pages/HomePage'));
const SigninPage = lazy(() => import('./pages/SigninPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PasswordPage = lazy(() => import('./pages/PasswordPage'));

function App() {
  const routes = useRoutes(ROUTES);

  const user = false;

  return (
    <Suspense fallback={<Loading />}>
      {user && <Navbar />}
      {routes}
    </Suspense>
  );
}

export default App;

const ROUTES = [
  { path: RouteEnum.HOME, element: <HomePage /> },
  { path: RouteEnum.SIGNIN, element: <SigninPage /> },
  { path: RouteEnum.SIGNUP, element: <SignupPage /> },
  { path: RouteEnum.SETTINGS, element: <SettingsPage /> },
  { path: RouteEnum.SETTINGS_PASSWORD, element: <PasswordPage /> },
  { path: RouteEnum.SETTINGS_PROFILE, element: <ProfilePage /> },
  { path: RouteEnum.SETTINGS_SUBSCRIPTION, element: <PricingPage /> },
];
