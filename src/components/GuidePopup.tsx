import useGuidePopupStore from "@/store/useGuidePopupStore";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GuidePopupProps {
  messages: string[];
  className?: string;
}
const GuidePopup = ({ messages, className }: GuidePopupProps) => {
  const { isGuideActive } = useGuidePopupStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  // messages prop이 변경되면 인덱스 초기화
  useEffect(() => {
    setCurrentIndex(0);
  }, [messages]);

  const currentMessage = messages[currentIndex] || "";
  const hasMoreMessages = currentIndex < messages.length - 1;

  const nextMessage = () => {
    if (hasMoreMessages) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (!isGuideActive || !currentMessage) return null;

  return (
    <div className={cn("relative -bottom-10", className)}>
      <div className="py-1 bg-[#df852e] w-16 rounded-[20px] absolute -top-3 -rotate-6">
        <span className="text-[#54200c] font-bold">위키</span>
      </div>
      <div className="py-5 px-8 bg-[#fff9e4] rounded-full flex items-center text-left">
        <span
          data-testid="line"
          className="text-lg text-[#7e693a] tracking-widest font-semibold"
        >
          {currentMessage.includes("\n")
            ? currentMessage.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : currentMessage}
        </span>
      </div>
      {hasMoreMessages && (
        <button
          data-testid="next-button"
          onClick={nextMessage}
          className="animate-bounce absolute -bottom-2 left-1/2 -translate-x-1/2 size-0 border-[20px] border-b-0 border-solid border-transparent border-t-[#e5b300] cursor-pointer rounded-full"
        ></button>
      )}
    </div>
  );
};

export default GuidePopup;
