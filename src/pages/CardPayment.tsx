import { useNavigate } from "react-router-dom";
import CardPaymentImage from "../assets/image/card-payment.png";
import { Button } from "@/components/ui/button";

import { completeOrder, setOrderInfo } from "@/feat/order";

const CardPayment = () => {
    const naviate = useNavigate();

    const navigateToPaymentSelect = () => {
        naviate("/payment-select");
    };
    
    const askToEarnPoint = () => {
        const getPoint = window.confirm("포인트를 적립하시겠습니까?");
        if (getPoint) {
            naviate("/point-collection");
            return
        }
        setOrderInfo("point", 0);
        navigateToPaymentResult()
    };


    const navigateToPaymentResult = () => {
        completeOrder();
        naviate("/payment-result");
    };

    return (
        <section className="flex flex-col max-w-[640px] content-center h-dvh ">
            <div className="mt-[10%] h-[20%] content-center">
                <h1 className="text-4xl">결제를 진행해주세요</h1>
            </div>
            <div className="grow flex flex-col justify-center items-center">
                <div className="w-[70%]">
                    <img src={CardPaymentImage} alt="카드 결제 안내 이미지" />
                </div>
                <div className="flex w-[50%] gap-5 m-auto">
                    <Button
                        variant="outline"
                        className="w-[50%] h-10 mt-10 m-auto"
                        onClick={navigateToPaymentSelect}
                    >
                        취소
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[50%] h-10 mt-10 m-auto bg-mc_yellow"
                        onClick={askToEarnPoint}
                    >
                        결제 완료
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CardPayment;
