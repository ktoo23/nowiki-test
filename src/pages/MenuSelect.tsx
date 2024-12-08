import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/data/menu.json";
import { Fragment } from "react/jsx-runtime";
import { MenuItem } from "../types/menu.interface";
import AddShoppingCartButton from "@/component/AddShoppingCartButton";
import QuickPayButton from "@/component/QuickPayButton";
import CancelButton from "@/component/CancelButton";
import TooltipWrapper from "@/components/tooltip/TooltipWrapper";
import { menu_items } from "../assets/data/menu.json";

const MenuSelect = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [menu] = menu_items.filter((item) => item.id === params.id);

    const handleAddShoppingCart = () => {};

    const handleViewOrderHistory = () => {
        navigate("/order-history");
    };

    const handleOrderCancel = () => {};
    return (
        <div>
            <section>
                <div>
                    <section className="flex flex-col items-center relative top-12">
                        <strong className="text-5xl mb-4">세트</strong>
                        <div className="text-3xl">{menu.name}</div>
                        <div className="text-3xl">{menu.price}원</div>
                    </section>
                    <div className="flex justify-evenly items-center mt-24">
                        {data.menu_items.slice(0, 1).map((meal: MenuItem) => (
                            <Fragment key={meal.id}>
                                <img
                                    src={menu.image_url}
                                    alt="menu-image"
                                    className="flex w-48 rounded-xl cursor-pointer border-2"
                                />
                            </Fragment>
                        ))}
                        {/* <div className="relative top-6">
                            {data.menu_items
                                .slice(0, 1)
                                .map((meal: MenuItem) => (
                                    <Fragment key={meal.id}>
                                        <img
                                            src={meal.image_url}
                                            alt="menu-image"
                                            className="flex w-48 rounded-xl cursor-pointer border-2"
                                        />
                                    </Fragment>
                                ))}
                            <Button className="mt-2">변경하기</Button>
                        </div>
                        <div className="relative top-6">
                            {data.menu_items
                                .slice(0, 1)
                                .map((meal: MenuItem) => (
                                    <Fragment key={meal.id}>
                                        <img
                                            src={meal.image_url}
                                            alt="menu-image"
                                            className="flex w-48 rounded-xl cursor-pointer border-2"
                                        />
                                    </Fragment>
                                ))}
                            <Button className="mt-2">변경하기</Button>
                        </div> */}
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
