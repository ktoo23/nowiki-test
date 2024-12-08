import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { WIKI_FAIRY_URL } from "@/types/constants";

type CustomerType = "regular" | "newbie";

const MainPage: React.FC = () => {
  const naviate = useNavigate();

  const navigateToDiningChoice = (type: CustomerType = "regular") => {
    localStorage.setItem("customerType", type);
    naviate("/dining-choice");
  };

  useEffect(() => {
    localStorage.removeItem("customerType");
  }, []);

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh bg-main_bg">
      <div className="grow bg-center bg-no-repeat	bg-contain bg-[url('@/assets/image/kiosk_main.jpg')]"></div>
      <div className="h-[30%] flex flex-col gap-5 justify-center items-center">
        <Button
          variant="outline"
          className="w-[80%] h-20 bg-mc_yellow"
          onClick={() => navigateToDiningChoice()}
        >
          주문 시작하기
        </Button>
        <Button
          variant="outline"
          className="w-[80%] h-10 bg-help_bg"
          onClick={() => navigateToDiningChoice("newbie")}
        >
          키오스크가 처음이라면 저를 눌러주세요
          <Avatar>
            <AvatarImage src={WIKI_FAIRY_URL} />
          </Avatar>
        </Button>
      </div>
    </section>
  );
};

export default MainPage;
