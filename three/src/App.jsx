import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/home", element: <Login /> },
    { path: "/", element: <Landing /> },
  ]);
  return <RouterProvider router={router} />;
};
