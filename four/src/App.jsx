import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { VideoPage } from "./pages/VideoPage";
import { Login } from "./pages/Login";
import { LoggedIn } from "./pages/LoggedIn";
import { VideoInfo } from "./pages/VideoInfo";
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/video/:id", element: <VideoPage /> },
    { path: "/login", element: <Login /> },
    { path: "/welcome", element: <LoggedIn /> },
    { path: "/videoinfo/:id", element: <VideoInfo /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return <RouterProvider router={router} />;
};
