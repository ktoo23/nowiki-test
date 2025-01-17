import { create } from "zustand";

interface GuidePopupStore {
  isGuideActive: boolean; // 안내 메시지 사용 여부
  message: string;
  messages: string[]; // 복수 메시지
  currentIndex: number; // 현재 메시지 인덱스
  setMessage: (message: string) => void;
  setMessages: (messages: string[]) => void;
  setIsGuideActive: (isActive: boolean) => void;
  nextMessage: () => void;
  resetState: () => void; // 상태 초기화 함수
}

const useGuidePopupStore = create<GuidePopupStore>((set) => ({
  isGuideActive: false,
  message: "",
  messages: [],
  currentIndex: 0,
  setMessage: (message: string) => {
    set(() => ({ message, messages: [] }));
  },
  setMessages: (messages) =>
    set(() => ({ message: "", messages, currentIndex: 0 })),
  setIsGuideActive: (isActive) => set({ isGuideActive: isActive }),
  nextMessage: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex < state.messages.length - 1
          ? state.currentIndex + 1
          : state.currentIndex,
    })),
  resetState: () => set(() => ({ message: "", messages: [], currentIndex: 0 })),
}));

export default useGuidePopupStore;
