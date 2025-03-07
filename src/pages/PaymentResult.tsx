import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getOrderInfo } from "@/feat/order";
import GuidePopup from "@/components/GuidePopup";

const message = [
  "우와아아! 혼자서 주문 완료!\n 처음은 어렵지만, 이렇게 한 번 해보니 다음에는 더 쉬울 거야! !",
  "키오스크 주문 성공!\n 어려워 보여도 한 번, 두 번 경험하면 누구나 익숙해질 수 있어\n 오늘 용기 잊지않길! !",
  "멋져! 새로운 기술에 도전한거야 ~ !\n 처음은 누구에게나 어렵지만, 한 걸음씩 나아가는 게 중요해\n 다음에 또 보자!",
  "걱정하지 마!\n 키오스크는 연습만 하면 금방 익숙해질거야\n 오늘처럼 한 번 더, 또 한 번 더 해보자구!",
  "정말 잘 했어! 두려워하지마.\n 오늘의 경험이 자신감이 되었길! !",
  "주문 완료! 새로운 방식에 도전하는 용기가 멋져\n 처음은 누구나 어렵지만,\n 이렇게 한 번 성공하니 다음에도 할 수 있을 거야!",
];
const PaymentResult = () => {
  const naviate = useNavigate();
  const resultNumber = Math.floor(Math.random() * 3000);
  const randomMesage = message[Math.floor(Math.random() * 6)];
  const isTableService = getOrderInfo()?.isTableService;

  const navigateToMain = () => {
    localStorage.clear();
    naviate("/");
  };

  return (
    <section className="max-w-screen-sm flex flex-col items-center justify-between h-dvh bg-white">
      <div className="mt-24 max-w-md w-full flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-3">주문이 접수되었습니다</h1>
          <p className="text-xl text-gray-700">영수증을 받으세요</p>
        </div>

        {/* 영수증 아이콘과 주문번호 */}
        <div className="relative mb-8">
          <div className="w-64 h-64 bg-gray-50 rounded-lg border-2 border-gray-200 shadow-md flex flex-col items-center justify-center">
            {/* 영수증 상단 부분 */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-white border-2 border-gray-200 rounded-t-lg"></div>

            {/* 영수증 롤 모양 */}
            <div className="w-full h-full p-6 flex flex-col items-center justify-center">
              {/* 주문 번호 */}
              <div className="text-7xl font-bold mb-4">{resultNumber}</div>
              <div className="text-2xl font-semibold"></div>

              {/* 라인 패턴 */}
              <div className="absolute bottom-12 left-8 right-8">
                <div className="flex items-center">
                  <div className="flex-1 border-t-2 border-gray-300"></div>
                  <div className="mx-2 text-gray-400">•</div>
                  <div className="flex-1 border-t-2 border-gray-300"></div>
                </div>
              </div>

              {/* 영수증 아이콘 */}
              <div className="absolute bottom-4 right-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                  <path d="M21 7H3" />
                  <path d="M7 11h10" />
                  <path d="M7 15h10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grow flex flex-col justify-center items-center">
          <GuidePopup
            className="-bottom-2"
            messages={
              isTableService
                ? [
                    "테이블 위에 영수증을 잘보이게 올려줘\n 음식이 준비되면 가져다줄게! !",
                    randomMesage,
                  ]
                : [
                    `직원 호출 화면에 ${resultNumber} 번호가 보이면\n 카운터에서 음식을 받으면 돼!`,
                    randomMesage,
                  ]
            }
          />
          <Button
            variant="outline"
            className="text-xl mt-5 px-12 py-4 h-20 bg-mc_yellow hover:bg-mc_yellow/80"
            onClick={navigateToMain}
          >
            새로 주문하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentResult;
