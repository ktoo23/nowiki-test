import { useEffect, useState } from "react";

const useGuideMessages = (initialMessages: string[]) => {
  const [messages, setMessages] = useState(initialMessages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMessages(initialMessages);
    setCurrentIndex(0); // 메시지 리스트가 바뀌면 인덱스 초기화
  }, [initialMessages]);

  const currentMessage = messages[currentIndex] || "";
  const hasMoreMessages = currentIndex < messages.length - 1;

  const nextMessage = () => {
    if (hasMoreMessages) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    currentMessage,
    nextMessage,
    hasMoreMessages,
  };
};

export default useGuideMessages;
