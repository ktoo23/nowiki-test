import React from "react";
import { useNavigate } from "react-router-dom";
import { setOrderInfo } from "../feat/order";
import { Button } from "@/components/ui/button";

const DiningChoice: React.FC = () => {
  const naviate = useNavigate();

  const confirmDiningType = (dineType: boolean) => {
    setOrderInfo("isTakeOut", dineType);
    naviate("/menus");
  };

  return (
    <>
      <h1>
        식사 장소를 <br /> 선택해주세요
      </h1>
      <div className="flex gap-[50px] justify-center items-center">
        <Button
          variant="outline"
          className="w-[100px] h-[100px]"
          onClick={() => confirmDiningType(false)}
        >
          매장 식사
        </Button>
        <Button
          variant="outline"
          className="w-[100px] h-[100px]"
          onClick={() => confirmDiningType(true)}
        >
          포장
        </Button>
      </div>
    </>
  );
};

export default DiningChoice;
