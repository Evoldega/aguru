import type { ProductResponse } from "../model/interfaces";

interface IGetProducts {
  limit: number
  skip: number
  search?: string
}

export const getProducts = async ({
  limit,
  skip,
  search,
}: IGetProducts): Promise<ProductResponse> => {
  const url = search
    ? `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}