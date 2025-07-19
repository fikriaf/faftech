import { create } from "zustand"

interface DeviceState {
  isMobile: boolean
  setIsMobile: (value: boolean) => void
}

export const useDeviceStore = create<DeviceState>((set, get) => ({
  isMobile: false,
  setIsMobile: (value: boolean) => {
    if (get().isMobile !== value) {
      set({ isMobile: value })
    }
  },
}))
