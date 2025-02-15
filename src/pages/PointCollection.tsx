import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { completeOrder, getOrderInfo, setOrderInfo } from "@/feat/order";

const PointCollection = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const getValidateItemPrice = () => {
    const { orderItem } = getOrderInfo();
    if (!orderItem) {
      alert("예상하지 못한 에러가 발생했습니다. \n초기화면으로 이동합니다");
      return navigate("/");
    }
    const totalPrice = orderItem.
      map(item => item.price).
      reduce((prev, cur) => prev + cur) as number;
      
    return totalPrice
  }

  const savePointInOrderInfo = () => {
    const isValidateItemPrice = getValidateItemPrice() as number;
    if (isValidateItemPrice > 0) {
      setOrderInfo("point", isValidateItemPrice * 0.1);
      backOrderHistory()
    }
  }

  const backOrderHistory = () => {
    alert(`휴대폰 번호 ${phoneNumber}로 포인트가 적립됩니다.`);
    completeOrder();
    navigate("/payment-result");
  };    

  const canclePointEarn = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-4">
      <div className="text-center">
        <span className="text-4xl block">핸드폰 번호를 입력해주세요.</span>
        {/* 이 텍스트 크기는 작게 */}
        <div className="mt-2 text-xl">또는 이미지를 스캔해주세요.</div>
      </div>
      <input
        type="text"
        placeholder="휴대폰 번호를 입력해주세요."
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full max-w-[320px] p-2 border border-gray-300 rounded-md mt-24"
      />
      <div className="fixed bottom-32 w-full max-w-md px-4">
        <div className="flex justify-around">
          <Button
            onClick={canclePointEarn}
            className="w-32 h-16 bg-white text-black border border-gray-300"
          >
            취소
          </Button>
          <Button
            onClick={savePointInOrderInfo}
            className="w-32 h-16 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PointCollection;
