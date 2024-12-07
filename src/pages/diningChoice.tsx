import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type DiningChoice = "dine_in" | "takeaway";

const DiningChoice: React.FC = () => {
  const naviate = useNavigate();

  const confirmDiningType = (dineType: DiningChoice) => {
    localStorage.setItem("diningChoice", dineType);
    naviate("/menus");
  };

  useEffect(() => {
    localStorage.removeItem("diningChoice");
  }, []);

  return (
    <>
      <h1>
        식사 장소를 <br /> 선택해주세요
      </h1>
      <button onClick={() => confirmDiningType("dine_in")}>매장 식사</button>
      <button onClick={() => confirmDiningType("takeaway")}>포장</button>
    </>
  );
};

export default DiningChoice;
