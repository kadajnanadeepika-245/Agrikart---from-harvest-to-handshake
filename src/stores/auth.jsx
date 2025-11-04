import { create } from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  role: null, // 'farmer' | 'buyer' | 'employee' | 'admin'
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  loginDemo: (role) => set({ user: { id: 'demo', name: 'Demo User', email: 'demo@agrikart.com', role }, role }),
  logout: () => set({ user: null, role: null }),
}))

export { useAuthStore }
export default useAuthStore
