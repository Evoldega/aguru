export interface Product {
  id: number
  title: string
  price: number
  category: string
  rating: number
  thumbnail: string
  stock: number
}

export interface ProductResponse {
  products: ProductDTO[]
  total: number
  skip: number
  limit: number
}

export interface ProductDTO {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: DimensionsDTO
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: ReviewDTO[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: MetaDTO
  thumbnail: string
  images: string[]
}

export interface DimensionsDTO {
  width: number
  height: number
  depth: number
}
export interface ReviewDTO {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}
export interface MetaDTO {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}