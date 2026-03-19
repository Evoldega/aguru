import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface RememberMeState {
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
}

export const useRememberMeStore = create<RememberMeState>()(
  persist(
    (set) => ({
      rememberMe: false,
      setRememberMe: (value) => set({ rememberMe: value }),
    }),
    {
      name: 'remember-me',
      storage: createJSONStorage(() => localStorage),
    }
  )
);