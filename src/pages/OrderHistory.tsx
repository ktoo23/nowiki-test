import { useState } from "react";
import data from "../assets/data/menu.json";
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

    const handleMenuList = () => {
        navigate("/menus");
    };

    return (
        <div className="flex flex-col px-4 py-6">
            <div className="flex justify-around">
                <h1 className="text-5xl font-bold mb-6">주문 내역 확인</h1>
                <Button className="text-xl" onClick={handleMenuList}>
                    처음으로
                </Button>
            </div>

            <div className="p-3 rounded-lg mb-4">
                <div className="flex justify-center items-start gap-4">
                    <img
                        src={menuImage}
                        alt="메뉴"
                        className="w-20 h-20 rounded-lg"
                    />
                    <div className="flex flex-col w-full">
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
                            <Button
                                onClick={resetMenu}
                                className="text-sm text-gray-500 ml-2 bg-gray-300 px-4 py-2 rounded-md"
                            >
                                취소
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-96 left-0 right-0 p-4 bg-white">
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col space-y-1">
                        <div className="bg-yellow-100 text-yellow-800 font-semibold text-lg rounded-md text-center absolute left-[33%] top-1 px-4">
                            결제 전 필수
                        </div>
                        <Button
                            variant="ghost"
                            onClick={openPointVerificationPage}
                            className="w-full px-10 py-8 bg-white text-black border text-xl  border-gray-300"
                        >
                            포인트 받기
                        </Button>
                        <Button
                            onClick={handleMenuList}
                            className="w-full px-10 py-8 bg-white text-black border text-xl  border-gray-300"
                        >
                            더 추가하기
                        </Button>
                    </div>
                    <Button
                        onClick={goToFoodOffer}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl w-32 h-22"
                    >
                        주문완료
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
