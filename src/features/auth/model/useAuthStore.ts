import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
import { loginRequest } from '../api/login';
import { useUserStore } from 'entities/user/index';
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
      const { id, username: name, email, accessToken, refreshToken } = response;
      const user = {
        id,
        username: name,
        email,
      };

      const tokens = {
        accessToken,
        refreshToken,
      };

      useRememberMeStore.getState().setRememberMe(rememberMe);

      useUserStore.getState().setUserData({ user, tokens });

      useUserStore.persist.setOptions({
        storage: createJSONStorage(() => (rememberMe ? localStorage : sessionStorage)),
      });

      set({ loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Ошибка авторизации', loading: false });
    }
  },

  logout: () => {
    useUserStore.getState().logout();
    localStorage.removeItem('user-data');
    sessionStorage.removeItem('user-data');
  },

  reset: () => set({ loading: false, error: null }),
}));