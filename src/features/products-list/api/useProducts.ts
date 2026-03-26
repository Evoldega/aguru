import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'entities/product'
import type { ProductResponse } from 'entities/product'

interface UseProductsState {
  limit: number; 
  skip: number;
  search?: string;
}

export const useProducts = ({ limit, skip, search = "" }: UseProductsState) => {
  return useQuery<ProductResponse | undefined, Error>({
    queryKey: ['products', { limit, skip, search }],
    queryFn: async () => {
      const res = await getProducts({ limit, skip, search })      
      return res;
    },
    placeholderData: (prev) => prev,
  })
}