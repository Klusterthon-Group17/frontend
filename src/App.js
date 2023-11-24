import { useLocation, useRoutes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import { Suspense, lazy, useEffect } from "react";
import { RouteEnum } from "./constant/RouteConstant";
import Loading from "./common/Loading";
import { Box, Container } from "@mui/material";
import ChatPage from "./pages/ChatPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const SigninPage = lazy(() => import("./pages/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

function App() {
  const routes = useRoutes(ROUTES);
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Box style={{ overflow: "hidden" }}>
        <Navbar />
        {/* disable scroll for chat page by removing the margin */}
        <Container className={pathname === "/chat" ? "" : "my-10"}>
          {routes}
        </Container>
      </Box>
    </Suspense>
  );
}

export default App;

const ROUTES = [
  { path: RouteEnum.HOME, element: <HomePage /> },
  { path: RouteEnum.SIGNIN, element: <SigninPage /> },
  { path: RouteEnum.SIGNUP, element: <SignupPage /> },
  { path: RouteEnum.SETTINGS, element: <SettingsPage /> },
  { path: RouteEnum.SETTINGS, element: <SettingsPage /> },
  { path: RouteEnum.CHAT, element: <ChatPage /> },
];
