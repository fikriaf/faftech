import { create } from 'zustand';

type PlayerState = {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  isPlaying: false,
  setIsPlaying: (value) => set({ isPlaying: value }),
}));
