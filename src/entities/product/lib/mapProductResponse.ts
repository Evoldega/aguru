import type { ProductDTO, Product } from "../model/interfaces";

export const mapProductResponse = (dto: ProductDTO): Product => ({
  id: dto.id,
  title: dto.title,
  price: dto.price,
  category: dto.category,
  rating: dto.rating,
  thumbnail: dto.thumbnail,
  stock: dto.stock,
})