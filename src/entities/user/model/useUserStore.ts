import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface UserState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  setUserData: (data: { user: User; tokens: AuthTokens }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,

      setUserData: (data) =>
        set({
          user: data.user,
          tokens: data.tokens,
          isAuthenticated: true,
        }),

      logout: () => set({ user: null, tokens: null, isAuthenticated: false }),
    }),
    {
      name: 'user-data',
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
      }),
    }
  )
);