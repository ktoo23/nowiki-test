import useGuidePopupStore from "@/store/useGuidePopupStore";

// GuidePopupStore의 state 타입 정의
type GuidePopupState = {
  isGuideActive: boolean;
};

const mockUseGuidePopupStore = (state: Partial<GuidePopupState>) => {
  const store = useGuidePopupStore.getState();
  useGuidePopupStore.setState({ ...store, ...state }, true);
};

export { mockUseGuidePopupStore };
