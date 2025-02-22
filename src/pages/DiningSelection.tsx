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
    <section className="flex flex-col max-w-[640px] content-center h-dvh">
      <div className="flex h-full w-full justify-around px-8 items-center">
        <Button
          variant="outline"
          className="h-[400px] w-[250px] bg-mc_yellow hover:bg-mc_yellow/80 flex flex-col"
          onClick={() => confirmDiningType(false)}
        >
          <div className="size-[150px]">
            <img
              src="image/eat-in.webp"
              alt="매장 식사 이미지"
              className="size-full block"
            />
          </div>
          <p className="text-3xl font-semibold">매장</p>
          <p className="text-white text-lg">매장에서 먹고 가요</p>
        </Button>

        <Button
          variant="outline"
          className="h-[400px] w-[250px] bg-mc_yellow hover:bg-mc_yellow/80 flex flex-col"
          onClick={() => confirmDiningType(true)}
        >
          <div className="size-[150px]">
            <img
              src="image/take-away.webp"
              alt="포장 이미지"
              className="size-full block"
            />
          </div>
          <p className="text-3xl font-semibold">포장</p>
          <p className="text-white text-lg">포장해서 가져가요</p>
        </Button>
      </div>
    </section>
  );
};

export default DiningSelection;
