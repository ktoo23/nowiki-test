import React from "react";
import { useNavigate } from "react-router-dom";

const Start: React.FC = () => {

  const naviate = useNavigate()

  const goTotalManus = () => {
    naviate("/menus")
  }

  return (
    <>
      <h1>start</h1>
      <button onClick={goTotalManus}>주문시작하기</button>
      <button>키오스크가 처음이라면 저를 눌러주세요</button>
    </>
  );
};

export default Start;
