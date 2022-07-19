import create from "zustand";

type Store = {
  theme: "active" | "unactive";
  settheme: () => void;
};
export const useStore = create<Store>((set) => ({
  theme: "unactive",
  settheme() {
    set((state) => ({
      theme: state.theme === "unactive" ? "unactive" : "active",
    }));
  },
}));
