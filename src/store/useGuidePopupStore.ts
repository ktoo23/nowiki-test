import { create } from "zustand";

interface GuidePopupStore {
  isGuideActive: boolean; // 안내 메시지 사용 여부
  setIsGuideActive: (isActive: boolean) => void;
}

const useGuidePopupStore = create<GuidePopupStore>((set) => ({
  isGuideActive: false,
  setIsGuideActive: (isActive) => set({ isGuideActive: isActive }),
}));

export default useGuidePopupStore;
