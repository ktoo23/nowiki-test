import { useNavigate } from "react-router-dom";
import data from "../assets/data/menu.json";
import { Fragment } from "react/jsx-runtime";
import { MenuItem } from "../types/menu.interface";

const MenuSelect = () => {
    const navigate = useNavigate();
    console.log(data.menu_items.map((item) => item));

    const handleAddShoppingCart = () => {};

    const handleViewOrderHistory = () => {
        navigate("/order-history");
    };

    const handleOrderCancel = () => {};
    return (
        <div>
            <div>세트</div>
            <div>진도 대파 크림 크로켓 버거</div>
            <div>
                {data.menu_items.slice(0, 1).map((data) => data.price)}원
                10칼로리
            </div>
            <div>
                {data.menu_items.slice(0, 3).map((meal: MenuItem) => (
                    <Fragment key={meal.id}>
                        <div>
                            <span>{meal.name}</span>
                        </div>
                        <div>
                            <img src={meal.image_url} alt="" />
                        </div>
                    </Fragment>
                ))}
            </div>
            <button onClick={handleAddShoppingCart}>장바구니에 넣기</button>
            <button onClick={handleOrderCancel}>취소</button>

            <button onClick={handleViewOrderHistory}>바로 결제하기</button>
        </div>
    );
};

export default MenuSelect;
