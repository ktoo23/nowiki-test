import { createBrowserRouter } from "react-router-dom";
import Start from "../pages/Start";
import TotalMenus from "../pages/totalMenus";
import MenuSelect from "../pages/MenuSelect";
import OrderHistory from "../pages/OrderHistory";
import PointCollection from "../pages/PointCollection";
import FoodOffer from "../pages/FoodOffer";
import DiningChoice from "../pages/DiningChoice";
import CardPayment from "../pages/CardPayment";
import PaymentSelect from "../pages/PaymentSelect";

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
    path: "/menu-select",
    element: <MenuSelect />,
  },
  {
    path: "dining-choice",
    element: <DiningChoice />,
  },
  {
    path: "/order-history",
    element: <OrderHistory />,
  },
  {
    path: "/point-collection",
    element: <PointCollection />,
  },
  {
    path: "/food-offer",
    element: <FoodOffer />,
  },
  {
    path: "/payment-select",
    element: <PaymentSelect />,
  },
  {
    path: "/card-payment",
    element: <CardPayment />,
  },
]);

export default routes;
