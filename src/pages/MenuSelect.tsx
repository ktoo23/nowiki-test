import { useNavigate } from "react-router-dom";
import data from "../assets/data/menu.json";
import { Fragment } from "react/jsx-runtime";
import { MenuItem } from "../types/menu.interface";
import AddShoppingCartButton from "@/component/AddShoppingCartButton";
import QuickPayButton from "@/component/QuickPayButton";
import CancelButton from "@/component/CancelButton";
import TooltipWrapper from "@/components/tooltip/TooltipWrapper";

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
                <div>
                    <section className="flex flex-col items-center mt-6">
                        <strong>세트</strong>
                        <div>진도 대파 크림 크로켓 버거</div>
                        <div>
                            {data.menu_items
                                .slice(0, 1)
                                .map((data: MenuItem) => data.price)}
                            원
                        </div>
                    </section>
                    <div className="flex justify-evenly items-center mt-24">
                        {data.menu_items.slice(0, 3).map((meal: MenuItem) => (
                            <Fragment key={meal.id}>
                                <img
                                    src={meal.image_url}
                                    alt="menu-image"
                                    className="flex w-48 rounded-xl cursor-pointer border-2"
                                />
                            </Fragment>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <TooltipWrapper />
                    </div>
                    <div className="flex justify-evenly mt-48">
                        <div className="flex flex-col space-y-2">
                            <AddShoppingCartButton
                                handleAddShoppingCart={handleAddShoppingCart}
                            />
                            <CancelButton
                                handleOrderCancel={handleOrderCancel}
                            />
                        </div>
                        <QuickPayButton
                            handleViewOrderHistory={handleViewOrderHistory}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MenuSelect;
