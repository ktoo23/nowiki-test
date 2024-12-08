import { create } from "zustand";

interface TooltipStore {
  tooltipString: string;
  setTooltipString: (param: string) => void;
}

const tooltipStore = create<TooltipStore>((set) => ({
  tooltipString: "",
  setTooltipString: (tooltipString: string) => set(() => ({ tooltipString })),
}));

export default tooltipStore;
