import { useRoutes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import { Suspense, lazy } from 'react';
import { RouteEnum } from './constant/RouteConstant';
import Loading from './common/Loading';
import Sidebar from './components/nav/Sidebar';

const HomePage = lazy(() => import('./pages/HomePage'));
const SigninPage = lazy(() => import('./pages/SigninPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PasswordPage = lazy(() => import('./pages/PasswordPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const ChatHistoryPage = lazy(() => import('./pages/ChatHistoryPage'));

function App() {
  const routes = useRoutes(ROUTES);

  const user = true;

  return (
    <>
      {user && <Navbar />}
      <div className='flex'>
        {user && <Sidebar />}
        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </div>
    </>
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
  { path: RouteEnum.CHAT, element: <ChatPage /> },
  { path: RouteEnum.HISTORY, element: <ChatHistoryPage /> },
];
