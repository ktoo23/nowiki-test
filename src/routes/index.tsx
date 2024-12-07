import { createBrowserRouter } from "react-router-dom";
import Start from "../pages/start";
import TotalMenus from "../pages/totalMenus";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/menus",
    element: <TotalMenus />,
  },
]);

export default routes;
