import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Movies } from "./pages/Movies";

export const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/movies/:id", element: <Movies /> },
  ]);
  return <RouterProvider router={router} />;
};
