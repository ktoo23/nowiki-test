import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FoodOffer = () => {
    const navigate = useNavigate();

    const navigatePaymentMethod = () => {
        navigate("/payment-select");
    };
    return (
        <div className="mt-24">
            <strong className="text-4xl">음식을 가져다 드릴까요?</strong>
            <div className="mt-24 space-x-4" onClick={navigatePaymentMethod}>
                <Button className="bg-[#DA291C]">예</Button>
                <Button>아니오</Button>
            </div>
        </div>
    );
};

export default FoodOffer;
