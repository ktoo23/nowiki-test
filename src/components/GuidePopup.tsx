import useGuidePopupStore from "@/store/useGuidePopupStore";
import React from "react";
import { cn } from "@/lib/utils";

interface GuidePopupProps {
  className?: string;
}
const GuidePopup = ({ className }: GuidePopupProps) => {
  const { isGuideActive, message, messages, currentIndex, nextMessage } =
    useGuidePopupStore((state) => state);

  if (!isGuideActive) return null;
  const currentMessage = messages[currentIndex] || message || "";

  if (currentMessage === "" || currentMessage === undefined) return null;

  return (
    <div className={cn("relative -bottom-10", className)}>
      <div className="py-1 bg-[#df852e] w-16 rounded-[20px] absolute -top-3 -rotate-6">
        <span className="text-[#54200c] font-bold">위키</span>
      </div>
      <div className="py-5 px-8 bg-[#fff9e4] rounded-full flex items-center text-left">
        <span className="text-lg text-[#7e693a] tracking-widest font-semibold">
          {currentMessage.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      </div>
      {messages.length - 1 > currentIndex && (
        <button
          onClick={nextMessage}
          className="animate-bounce absolute -bottom-2 left-1/2 -translate-x-1/2 size-0 border-[20px] border-b-0 border-solid border-transparent border-t-[#e5b300] cursor-pointer rounded-full"
        ></button>
      )}
    </div>
  );
};

export default GuidePopup;
