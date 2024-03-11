import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: (

    // ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default AppRouter;
