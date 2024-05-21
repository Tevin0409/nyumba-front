import { StateCreator } from "zustand";
export interface AuthSlice {
  isLoggedIn: boolean;
  userInfo: null | User;
  setIsLoggedIn: (p: boolean) => void;
  setUserInfo: (p: User) => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
  get
) => ({
  isLoggedIn: false,
  userInfo: null,
  setIsLoggedIn: (status) => {
    set({ isLoggedIn: status });
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
});
