import { useNavigate } from "react-router-dom";
import data from "../assets/data/menu.json";
import { Fragment } from "react/jsx-runtime";
import { MenuItem } from "../types/menu.interface";
import AddShoppingCartButton from "@/component/AddShoppingCartButton";
import QuickPayButton from "@/component/QuickPayButton";
import CancelButton from "@/component/CancelButton";

const MenuSelect = () => {
  const navigate = useNavigate();

  const handleAddShoppingCart = () => {};

  const handleViewOrderHistory = () => {
    navigate("/order-history");
  };

  const handleOrderCancel = () => {};
  return (
    <div>
      <section>
        <strong>세트</strong>
        <div>진도 대파 크림 크로켓 버거</div>
        <div>
          {data.menu_items.slice(0, 1).map((data: MenuItem) => data.price)}원
          10칼로리
        </div>
      </section>
      <div className="flex justify-evenly items-center mt-24">
        {data.menu_items.slice(0, 3).map((meal: MenuItem) => (
          <Fragment key={meal.id}>
            <img
              src={meal.image_url}
              alt="menu-image"
              className="rounded-2xl cursor-pointer"
            />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-evenly mt-96 ">
        <div className="flex flex-col space-y-2">
          <AddShoppingCartButton
            handleAddShoppingCart={handleAddShoppingCart}
          />
          <CancelButton handleOrderCancel={handleOrderCancel} />
        </div>
        <QuickPayButton handleViewOrderHistory={handleViewOrderHistory} />
      </div>
    </div>
  );
};

export default MenuSelect;
