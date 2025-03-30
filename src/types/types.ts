// 商品
export interface Product {
  name: string;
  image: string;
  price: number;
  detail: string;
  quantity?: number;
  option?: Record<string, string>[];
}
