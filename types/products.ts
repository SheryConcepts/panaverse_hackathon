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

export type LineItem = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
  adjustable_quantity: {
    enabled: boolean;
  };
};
