import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentSelect = () => {
  const naviate = useNavigate();

  const navigateToCardPayment = () => {
    naviate("/card-payment");
  };

  return (
    <>
      <h1>결제 방법을 선택해주세요</h1>
      <div className="flex gap-[50px] justify-center items-center">
        <Button variant="outline" className="w-[100px] h-[100px]">
          모바일 상품권
        </Button>
        <Button
          variant="outline"
          className="w-[100px] h-[100px]"
          onClick={navigateToCardPayment}
        >
          카드 결제
        </Button>
      </div>
    </>
  );
};

export default PaymentSelect;
