import { create } from 'zustand';

interface SearchItemState {
  search: string;
  setSearch: (value: string) => void;
}

export const useSearchStore = create<SearchItemState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));