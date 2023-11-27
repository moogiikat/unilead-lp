import { create } from "zustand";

interface INav {
  navState: boolean;
  setNavOpen: (newNavState: boolean) => void;
}

export const useNavStore = create<INav>((set) => ({
  navState: false,
  setNavOpen: (newNavState: boolean) => set({ navState: newNavState }),
}));
