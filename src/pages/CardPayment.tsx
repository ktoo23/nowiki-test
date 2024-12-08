import { useNavigate } from "react-router-dom";
import CardPaymentImage from "../assets/image/card-payment.png";
import { Button } from "@/components/ui/button";

const CardPayment = () => {
  const naviate = useNavigate();

  const navigateToPaymentSelect = () => {
    naviate("/payment-select");
  };

  return (
    <section className="flex flex-col justify-center">
      <h1>결제를 진행해주세요</h1>
      <div className="w-[500px] m-auto">
        <img src={CardPaymentImage} alt="카드 결제 안내 이미지" />
      </div>
      <Button
        variant="outline"
        className="w-[100px] h-[50px]"
        onClick={navigateToPaymentSelect}
      >
        취소
      </Button>
    </section>
  );
};

export default CardPayment;
