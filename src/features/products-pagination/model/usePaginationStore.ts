import { create } from 'zustand'

interface PaginationState {
  page: number
  pageSize: number

  setPage: (v: number) => void
}

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,
  pageSize: 20,

  setPage: (page) => set({ page }),
}))