import { create } from "zustand";
import { createProcessSlice, ProcessSlice } from "./slices/ProcessSlice";
import { AuthSlice, createAuthSlice } from "./slices/AuthSlice";

export const useAppStore = create<ProcessSlice & AuthSlice>()((...a) => ({
  ...createProcessSlice(...a),
  ...createAuthSlice(...a),
}));
