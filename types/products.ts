
export interface Product {
  _id: string;
  productTitle: string;
  productSlug: string;
  productCategory: string[];
  productImages: string[];
  productSizes: string[];
  productDetails: string;
  productCare: string[];
  productType: string;
  productPrice: number;
}

export type ProductsRecord = Record<string, Product>;

export type Order = {
  id: number;
  quantity: number;
  size: string;
  productId: string;
  userId: string;
  _id: string;
  productTitle: string;
  productPrice: number;
  productImages: string[];
};
