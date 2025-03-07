import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setOrderInfo } from "@/feat/order";
import { CreditCard, Gift } from "lucide-react";

const PaymentSelect = () => {
  const naviate = useNavigate();

  const navigateToCardPayment = () => {
    setOrderInfo("payMethod", "creditCard");
    naviate("/card-payment");
  };

  return (
    <section className="max-w-screen-sm mt-24 flex flex-col items-center">
      <strong className="mb-10 text-5xl w-[80%]">
        결제 방법을 <br /> 선택하세요
      </strong>

      <div className="flex-1 w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-8">
          {/* 카드 결제 옵션 */}
          <div className="payment-option bg-gray-50 rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-mc_yellow transition-all">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 bg-white rounded-full shadow-inner">
                <CreditCard className="size-10" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">카드 결제</h2>
              <p className="text-gray-600 mb-6 text-center">
                신용카드, 체크카드로 결제하기
              </p>
              <Button
                className="w-full py-6 text-xl font-bold bg-mc_yellow hover:bg-mc_yellow/80 text-black border-2 border-yellow-400"
                onClick={navigateToCardPayment}
              >
                카드로 결제하기
              </Button>
            </div>
          </div>

          {/* 모바일 상품권 옵션 */}
          <div className="payment-option bg-gray-50 rounded-xl p-6 shadow-md border-2 border-gray-100">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 bg-white rounded-full shadow-inner">
                <Gift className="size-10" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">
                모바일 상품권
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                기프티콘, e쿠폰으로 결제하기
              </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full py-6 text-xl font-semibold border-2 border-gray-300 bg-white hover:bg-gray-100"
                  >
                    상품권으로 결제하기
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-4 text-lg font-medium bg-white border-2 border-gray-200 shadow-lg">
                  모바일 상품권 결제는 추후 서비스 예정입니다.
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSelect;
