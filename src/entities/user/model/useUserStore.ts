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

  setUserData: (data: { user: User; tokens: AuthTokens }, rememberMe: boolean) => void;
  logout: () => void;
}

const STORAGE_KEY = 'user-data';

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,

      setUserData: (data, rememberMe) => {
        const state = {
          user: data.user,
          tokens: data.tokens,
          isAuthenticated: true,
        };

        set(state);

        if (rememberMe) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      },

      logout: () => {
        set({ user: null, tokens: null, isAuthenticated: false });

        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(STORAGE_KEY);
      },
    }),
    {
      name: STORAGE_KEY,

      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated,
      }),

      onRehydrateStorage: () => (state) => {
        if (!state?.isAuthenticated) {
          const saved = localStorage.getItem(STORAGE_KEY);

          if (saved) {
            try {
              const parsed = JSON.parse(saved);

              state?.setUserData(
                {
                  user: parsed.user,
                  tokens: parsed.tokens,
                },
                true
              );
            } catch (e) {
              console.error('Failed to restore session', e);
            }
          }
        }
      },
    }
  )
);