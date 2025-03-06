import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { setOrderInfo } from "../feat/order";
import GuidePopup from "@/components/GuidePopup";

const FoodOffer = () => {
  const navigate = useNavigate();
  const navigatePaymentMethod = () => {
    navigate("/payment-select");
  };

  const confirmFoodOffer = (offerType: boolean) => {
    setOrderInfo("isTableService", offerType);
    navigatePaymentMethod();
  };

  return (
    <section className="mt-24 flex flex-col items-center">
      <strong className="text-5xl w-[80%]">
        테이블 서비스를 <br /> 이용해 보세요
      </strong>
      <div className="w-[80%] mt-24">
        <div className="w-[100%]">
          <div className="h-40 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/serving-table.png')]"></div>
        </div>
        <div className="flex space-x-2 mt-12">
          <Button
            variant="outline"
            className="w-[50%] text-xl px-12 py-4 h-20 bg-mc_yellow"
            onClick={() => confirmFoodOffer(true)}
          >
            테이블 서비스
          </Button>
          <Button
            variant="outline"
            className="w-[50%] text-xl px-12 py-4 h-20 bg-mc_black text-white"
            onClick={() => confirmFoodOffer(false)}
          >
            카운터에서 픽업
          </Button>
        </div>
      </div>
      <GuidePopup
        messages={[
          "테이블 서비스를 이용해봐! \n 자리에 앉아있으면 주문한 음식을 가져다줄게!",
        ]}
      />
    </section>
  );
};

export default FoodOffer;
