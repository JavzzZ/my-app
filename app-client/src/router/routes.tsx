import { createBrowserRouter } from "react-router-dom";

import App from '../App.tsx';
import About from '../pages/About';
import System from '../pages/System';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "System",
        element: <System />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
