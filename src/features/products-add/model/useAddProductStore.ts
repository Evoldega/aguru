import { create } from 'zustand'

interface AddProductState {
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

export const useAddProductStore = create<AddProductState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))