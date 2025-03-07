import { useNavigate } from "react-router-dom";
import CardPaymentImage from "../assets/image/card-payment.png";
import { Button } from "@/components/ui/button";
import { completeOrder, setOrderInfo } from "@/feat/order";

const CardPayment = () => {
  const navigate = useNavigate();

  const navigateToPaymentSelect = () => {
    navigate("/payment-select");
  };

  const askToEarnPoint = () => {
    const getPoint = window.confirm("포인트를 적립하시겠습니까?");
    if (getPoint) {
      navigate("/point-collection");
      return;
    }
    setOrderInfo("point", 0);
    navigateToPaymentResult();
  };

  const navigateToPaymentResult = () => {
    completeOrder();
    navigate("/payment-result");
  };

  return (
    <section className="max-w-screen-sm mt-24 flex flex-col justify-center h-dvh bg-white">
      <h1 className="text-3xl font-bold text-center">결제를 진행해주세요</h1>

      <div className="flex-1 flex flex-col justify-center items-center px-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-8 w-full max-w-md">
          <div className="flex items-center justify-center">
            <p className="text-gray-700 mb-2 font-medium text-lg">※ 안내사항</p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <ul className="text-gray-600 text-md space-y-1 ml-4">
              <li>
                • <b>IC칩</b>이 있는 카드는 칩 부분을 <b>위로</b>
              </li>
              <li>
                • 결제 오류 시, <b>카드를 긁어주세요</b>
              </li>
              <li>• 카드를 끝까지 넣어주세요</li>
            </ul>
          </div>
        </div>

        <div className="w-64 mb-8 relative">
          <img
            src="/image/card-payment.png"
            alt="카드 결제 안내 이미지"
            className="w-full"
          />
        </div>

        <div className="flex space-x-2 mt-12">
          <Button
            variant="outline"
            className="w-[50%] text-xl px-12 py-4 h-20 bg-white"
            onClick={navigateToPaymentSelect}
          >
            취소하기
          </Button>
          <Button
            variant="outline"
            className="w-[50%] text-xl px-12 py-4 h-20 bg-mc_yellow hover:bg-mc_yellow/80 text-black"
            onClick={askToEarnPoint}
          >
            결제 완료
          </Button>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-6">
        <p className="text-center text-gray-600">
          문제가 생기면 카운터에 문의해 주세요
        </p>
      </div>
    </section>
  );
};

export default CardPayment;
