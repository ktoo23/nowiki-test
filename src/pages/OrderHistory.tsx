import { useState } from "react";
import data from "../assets/image/data/menu.json";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OrderHistory = () => {
    const menuImage = data.menu_items.map((item) => item.image_url)[0];
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

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
        <div className="px-4 py-6">
            <h3 className="text-lg font-bold mb-6">주문 내역 확인</h3>

            <div className="p-3 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                    <img
                        src={menuImage}
                        alt="메뉴"
                        className="w-20 h-20 rounded-lg"
                    />
                    <div className="flex">
                        <p className="text-lg font-bold">세트</p>
                        <p className="text-sm">
                            {data.menu_items.map((item) => item.name)[0]}
                        </p>
                        <p className="font-semibold mb-2">
                            {data.menu_items.map((item) => item.price)[0]}원
                        </p>
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={decreaseCount}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-gray-300"
                            >
                                -
                            </button>
                            <span>{count}</span>
                            <button
                                onClick={increaseCount}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-gray-300"
                            >
                                +
                            </button>
                            <button
                                onClick={resetMenu}
                                className="text-sm text-gray-500 ml-2"
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-32 left-0 right-0 p-4 bg-white">
                <div className="flex gap-2">
                    <div className="flex-1 space-y-2">
                        <Button
                            onClick={openPointVerificationPage}
                            className="w-full bg-white text-black border border-gray-300"
                        >
                            포인트 받기
                        </Button>
                        <Button className="w-full bg-white text-black border border-gray-300">
                            더 추가하기
                        </Button>
                    </div>
                    <Button
                        onClick={goToFoodOffer}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6"
                    >
                        주문완료
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
