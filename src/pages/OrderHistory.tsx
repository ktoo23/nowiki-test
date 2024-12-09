import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { setItemToOrderInfo } from "@/feat/order";

const OrderHistory = () => {
    const { state } = useLocation();
    const name = state?.name;
    const price = state?.price;
    const image_url = state?.image_url;

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
        setItemToOrderInfo(state);
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
                <div className="flex justify-center items-center gap-4">
                    <img
                        src={image_url}
                        alt="메뉴"
                        className="w-36 h-36 object-cover"
                    />
                    <div className="w-48">
                        <p className="text-3xl font-bold">{name}</p>
                        <p className="font-semibold text-2xl mb-2">{price}원</p>
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
                                className="text-lg text-black ml-2 bg-mc_red px-4 py-2 rounded-md"
                            >
                                취소
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col space-y-1">
                        {/* <div className="bg-yellow-100 text-yellow-800 font-semibold text-lg rounded-md text-center absolute left-[33%] top-1 px-4">
                            결제 전 필수
                        </div> */}
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        onClick={openPointVerificationPage}
                                        className="w-full px-10 py-8 bg-white text-black border text-xl border-gray-300"
                                    >
                                        포인트 받기
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="z-50">
                                    <p className="font-semibold text-lg rounded-md text-center px-4 py-2">
                                        결제 전 필수
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
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
