import { useNavigate } from "react-router-dom";
import CardPaymentImage from "../assets/image/card-payment.png";
import { Button } from "@/components/ui/button";

const CardPayment = () => {
  const naviate = useNavigate();

  const navigateToPaymentSelect = () => {
    naviate("/payment-select");
  };

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh ">
      <div className="mt-[10%] h-[30%] content-center">
        <h1 className="text-4xl">결제를 진행해주세요</h1>
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <div className="w-[80%]">
          <img src={CardPaymentImage} alt="카드 결제 안내 이미지" />
        </div>
        <Button
          variant="outline"
          className="w-[20%] h-10 mt-10"
          onClick={navigateToPaymentSelect}
        >
          취소
        </Button>
      </div>
    </section>
  );
};

export default CardPayment;
