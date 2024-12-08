import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentResult = () => {
  const naviate = useNavigate();
  const resultNumber = Math.floor(Math.random() * 3000);

  const navigateToMain = () => {
    naviate("/");
  };

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh ">
      <div className="mt-[10%] h-[20%] content-center">
        <h1 className="text-6xl">
          <span className="font-bold">{resultNumber}</span>번
        </h1>
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <div className="h-[50%] w-[60%] content-center">
          <div className="w-[100%] h-40 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/direction-board.png')]"></div>
        </div>
        {/* 테이블 서비스 */}
        <div className="flex flex-col">
          <div>자리를 잡은 후,</div>
          <div>
            테이블 위에 영수증을{" "}
            <span className="font-bold">잘 보이게 올려주세요.</span>
          </div>
          <div>음식이 준비되면 직원이 가져다 드려요.</div>
        </div>
        {/* 직접 픽업 */}
        <div className="flex flex-col">
          <div>좌측 큰 화면에</div>
          <div>해당 번호가 나오면 가지러 와주세요!</div>
        </div>
        <Button
          variant="outline"
          className="w-[50%] h-10 mt-10 m-auto bg-mc_yellow"
          onClick={navigateToMain}
        >
          새로 주문하기
        </Button>
      </div>
    </section>
  );
};

export default PaymentResult;
