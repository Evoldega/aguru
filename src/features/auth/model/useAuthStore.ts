import { create } from 'zustand';
import { useUserStore, loginRequest } from 'entities/user';
import { useRememberMeStore } from './useRememberMeStore';

interface AuthState {
  loading: boolean;
  error: string | null;
  login: (username: string, password: string, rememberMe: boolean) => Promise<void>;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  error: null,

  login: async (username, password, rememberMe) => {
    try {
      set({ loading: true, error: null });

      const response = await loginRequest(username, password);

      const user = {
        id: response.id,
        username: response.username,
        email: response.email,
      };

      const tokens = {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };

      useRememberMeStore.getState().setRememberMe(rememberMe);

      useUserStore.getState().setUserData({ user, tokens }, rememberMe);

      set({ loading: false });
    } catch (error: any) {
      set({ 
        error: error.message || 'Ошибка авторизации', 
        loading: false 
      });
    }
  },

  logout: () => {
    useUserStore.getState().logout();
  },

  reset: () => set({ loading: false, error: null }),
}));