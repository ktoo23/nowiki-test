import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PaymentSelect = () => {
  const naviate = useNavigate();

  const navigateToCardPayment = () => {
    naviate("/card-payment");
  };

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh ">
      <div className="mt-[10%] h-[30%] content-center">
        <h1 className="text-4xl">
          결제 방법을 <br /> 선택해주세요
        </h1>
      </div>

      <div className="grow flex justify-center items-center">
        <div className="relative w-[50%] gift-card flex flex-col items-center">
          <div className="w-[40%] h-20 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/gift-card.png')]"></div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[80%] h-20">
                모바일 상품권
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-100">
              모바일 상품권 결제는 추후 서비스 예정입니다.
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-[50%] payment flex flex-col items-center">
          <div className="w-[40%] h-20 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/payment.png')]"></div>
          <Button
            variant="outline"
            className="w-[80%] h-20 bg-mc_yellow"
            onClick={navigateToCardPayment}
          >
            카드 결제
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSelect;
