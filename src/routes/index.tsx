import { createBrowserRouter } from "react-router-dom";
import Start from "../pages/start";
import TotalMenus from "../pages/totalMenus";
import DiningChoice from "../pages/diningChoice";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/menus",
    element: <TotalMenus />,
  },
  {
    path: "/dining-choice",
    element: <DiningChoice />,
  },
]);

export default routes;
