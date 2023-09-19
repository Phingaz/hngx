import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Landing /> },
  ]);
  return <RouterProvider router={router} />;
};
