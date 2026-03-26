import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { GridSortModel } from '@mui/x-data-grid'

interface SortState {
  sortModel: GridSortModel
  setSortModel: (model: GridSortModel) => void
}

//Хранение состояния сортировки в localStorage
export const useSortStore = create<SortState>()(
  persist(
    (set) => ({
      sortModel: [],

      setSortModel: (sortModel) => set({ sortModel }),
    }),
    {
      name: 'product-sort',
    }
  )
)