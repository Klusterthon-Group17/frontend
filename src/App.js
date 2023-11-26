
import { useRoutes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import { Suspense, lazy, useEffect, useState } from "react";
import { RouteEnum } from './constant/RouteConstant';
import Loading from './common/Loading';
import Sidebar from './components/nav/Sidebar';

const HomePage = lazy(() => import('./pages/HomePage'));
const SigninPage = lazy(() => import('./pages/SigninPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const VerifyPage = lazy(() => import('./pages/VerifyPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PasswordPage = lazy(() => import('./pages/PasswordPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const ChatHistoryPage = lazy(() => import('./pages/ChatHistoryPage'));

function App() {
  const authRoutes = useRoutes(AUTH_ROUTES);
  const unAuthRoutes = useRoutes(UN_AUTH_ROUTES);

  const [authenticated, setAuthenticated] = useState(false);


  // determine where user are routed to
  useEffect(() => {
    const isAuth = localStorage.getItem("health.ai");
    if (isAuth) {
      setAuthenticated(true);
      return;
    }
    setAuthenticated(false);
  }, []);

  return (
    <>
      {authenticated && <Navbar />}
      <div style={{ height: "100vh" }} className="flex">
        {authenticated && <Sidebar />}
        {authenticated ? (
          <Suspense fallback={<Loading />}>{authRoutes}</Suspense>
        ) : (
          <Suspense fallback={<Loading />}>{unAuthRoutes}</Suspense>
        )}
      </div>
    </>
  );
}

export default App;


const AUTH_ROUTES = [
  { path: RouteEnum.SETTINGS, element: <SettingsPage /> },
  { path: RouteEnum.SETTINGS_PASSWORD, element: <PasswordPage /> },
  { path: RouteEnum.SETTINGS_PROFILE, element: <ProfilePage /> },
  { path: RouteEnum.SETTINGS_SUBSCRIPTION, element: <PricingPage /> },
  { path: RouteEnum.CHAT, element: <ChatPage /> },
  { path: RouteEnum.HISTORY, element: <ChatHistoryPage /> },
  { path: "/*", element: <ChatPage /> },
];

const UN_AUTH_ROUTES = [
  { path: RouteEnum.HOME, element: <HomePage /> },
  { path: RouteEnum.SIGNIN, element: <SigninPage /> },
  { path: RouteEnum.SIGNUP, element: <SignupPage /> },
  { path: "/*", element: <HomePage /> },
];
