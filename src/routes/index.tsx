import { createBrowserRouter } from "react-router-dom";
import Start from "../pages/start";
import TotalMenus from "../pages/totalMenus";
import MenuSelect from "../pages/MenuSelect";
import OrderHistory from "../pages/OrderHistory";
import PointCollection from "../pages/PointCollection";
import FoodOffer from "../pages/FoodOffer";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Start />
    },
    {
        path: "/menus",
        element: <TotalMenus />
    },
    {
        path: "/menu-select",
        element: <MenuSelect />
    },

    {
        path: "/order-history",
        element: <OrderHistory />
    },
    {
        path: "/point-collection",
        element: <PointCollection />
    },
    {
        path: "/food-offer",
        element: <FoodOffer />
    }
]);

export default routes;
