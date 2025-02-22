import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import useGuidePopupStore from "@/store/useGuidePopupStore";

type CustomerType = "regular" | "newbie";

const MainPage: React.FC = () => {
  const naviate = useNavigate();
  const { setIsGuideActive } = useGuidePopupStore((state) => state);

  const navigateToDiningChoice = (type: CustomerType = "regular") => {
    localStorage.setItem("customerType", type);
    naviate("/dining-choice");
  };

  useEffect(() => {
    localStorage.removeItem("customerType");
  }, []);

  return (
    <section className="flex flex-col max-w-[640px] content-center h-dvh">
      <div className="flex h-full w-full justify-around px-8 items-center">
        <Button
          variant="outline"
          className="h-[400px] w-[250px] bg-mc_yellow hover:bg-mc_yellow/80 text-2xl shadow-md"
          onClick={() => {
            setIsGuideActive(false);
            navigateToDiningChoice();
          }}
        >
          주문 시작하기
        </Button>
        <Button
          variant="outline"
          className="flex flex-col h-[400px] w-[250px] bg-white relative text-2xl shadow-md"
          onClick={() => {
            setIsGuideActive(true);
            navigateToDiningChoice("newbie");
          }}
        >
          키오스크는
          <br />
          처음이에요
          <div className="absolute bottom-2 flex justify-center items-center">
            <Avatar className="size-[90px] transform scale-x-[-1]">
              <AvatarImage src="/image/wiki.png" />
            </Avatar>
            <p className="ninline-block h-fit text-base border-2 border-transparent border-b-mc_yellow">
              위키가 도와줄게!
            </p>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default MainPage;
