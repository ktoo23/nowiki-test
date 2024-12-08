import TooltipWrapper from "@/components/tooltip/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FoodOffer = () => {
    const navigate = useNavigate();

    const navigatePaymentMethod = () => {
        navigate("/payment-select");
    };
    return (
        <div className="mt-24 flex flex-col items-center">
            <strong className="text-4xl">음식을 가져다 드릴까요?</strong>
            <div
                className="mt-24 flex space-x-2"
                onClick={navigatePaymentMethod}
            >
                <Button className="w-full text-xl px-12 py-4 h-20 bg-mc_yellow">
                    예
                </Button>
                <Button className="w-full text-xl px-12 py-4 h-20 bg-mc_black">
                    아니오
                </Button>
            </div>
            <div className="fixed bottom-96">
                <TooltipWrapper />
            </div>
        </div>
    );
};

export default FoodOffer;
