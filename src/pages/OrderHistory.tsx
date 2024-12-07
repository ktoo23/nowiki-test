import { useState } from "react";
import data from "../assets/data/menu.json";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
    // console.log(data);
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount((count) => count + 1);
    };

    const decreaseCount = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    const resetMenu = () => {
        // 주문 내역 삭제
    };

    const openPointVerificationPage = () => {
        navigate("/point-collection");
    };

    const goToFoodOffer = () => {
        navigate("/food-offer");
    };
    return (
        <div>
            <div>
                {data.meals.map((meal) => (
                    <div key={meal.id}>{meal.price}</div>
                ))}
                <button onClick={decreaseCount}>-</button>
                <div>{count}</div>
                <button onClick={increaseCount}>+</button>
                <button onClick={resetMenu}>취소</button>
            </div>
            <div>
                <div>
                    <button onClick={openPointVerificationPage}>
                        포인트 받기
                    </button>
                    <button>더 추가히기</button>
                </div>
                <button onClick={goToFoodOffer}>주문완료</button>
            </div>
        </div>
        // 카운터 만들기
    );
};

export default OrderHistory;
