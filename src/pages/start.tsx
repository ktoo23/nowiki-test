import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type CustomerType = "regular" | "newbie";

const Start: React.FC = () => {
  const naviate = useNavigate();

  const navigateToDiningChoice = (type: CustomerType = "regular") => {
    localStorage.setItem("customerType", type);
    naviate("/dining-choice");
  };

  useEffect(() => {
    localStorage.removeItem("customerType");
  }, []);

  return (
    <>
      <h1>start</h1>
      <button onClick={() => navigateToDiningChoice()}>주문시작하기</button>
      {/* 로컬스토리지에 { isNewbie: true } 저장해두고 진행*/}
      <button onClick={() => navigateToDiningChoice("newbie")}>
        키오스크가 처음이라면 저를 눌러주세요
      </button>
    </>
  );
};

export default Start;
