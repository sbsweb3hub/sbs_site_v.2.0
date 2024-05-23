import { create } from "zustand";

interface State {
  isMainTab: boolean;
  setIsMainTab: (isMainTab: boolean) => void;
}

export const useProjectStore = create<State>((set) => ({
  isMainTab: false,
  setIsMainTab: (isMainTab) => set(() => ({ isMainTab })),
}));
