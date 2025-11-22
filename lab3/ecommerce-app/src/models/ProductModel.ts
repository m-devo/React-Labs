export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  stock: number;
  images: string[];
  brand?: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}