import React from "react";
import { useNavigate } from "react-router-dom";
import { setOrderInfo } from "../feat/order";
import { Button } from "@/components/ui/button";

const DiningSelection: React.FC = () => {
  const naviate = useNavigate();

  const confirmDiningType = (dineType: boolean) => {
    setOrderInfo("isTakeOut", dineType);
    naviate("/menus");
  };

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh ">
      <div className="mt-[10%] h-[30%] content-center">
        <h1 className="text-5xl">
          <span className="text-mc_red">식사 장소</span>를 <br /> 선택해주세요
        </h1>
      </div>

      <div className="grow flex justify-center items-center">
        <div className="w-[50%] eat-in flex flex-col items-center">
          <div className="w-[40%] h-20 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/eat-in.png')]"></div>
          <Button
            variant="outline"
            className="w-[80%] h-20 bg-mc_yellow"
            onClick={() => confirmDiningType(false)}
          >
            매장 식사
          </Button>
        </div>

        <div className="w-[50%] takeaway flex flex-col items-center">
          <div className="w-[40%] h-20 bg-center bg-no-repeat bg-contain bg-[url('@/assets/image/takeaway.png')]"></div>
          <Button
            variant="outline"
            className="w-[80%] h-20 bg-mc_yellow"
            onClick={() => confirmDiningType(true)}
          >
            포장
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiningSelection;
