import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { VideoPage } from "./pages/VideoPage";
import { Login } from "./pages/Login";
import { LoggedIn } from "./pages/LoggedIn";
import { VideoInfo } from "./pages/VideoInfo";
// import { PopUp } from "./pages/PopUp";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/video", element: <VideoPage /> },
    { path: "/login", element: <Login /> },
    { path: "/welcome", element: <LoggedIn /> },
    { path: "/video:id", element: <VideoInfo /> },
  ]);
  return <RouterProvider router={router} />;
};
