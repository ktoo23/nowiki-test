import React from "react";
import { useNavigate } from "react-router-dom";
import { setOrderInfo } from "../feat/order";


const DiningChoice: React.FC = () => {
  const naviate = useNavigate();

  const confirmDiningType = (dineType: boolean) => {
    setOrderInfo("isTakeOut", dineType)
    naviate("/menus");
  };

  return (
    <>
      <h1>
        식사 장소를 <br /> 선택해주세요
      </h1>
      <button onClick={() => confirmDiningType(false)}>매장 식사</button>
      <button onClick={() => confirmDiningType(true)}>포장</button>
    </>
  );
};

export default DiningChoice;
