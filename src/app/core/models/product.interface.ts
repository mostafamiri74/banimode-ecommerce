export interface IProduct {
  id: number;
  product_reference: string;
  link: string;
  product_name: string;
  product_price: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  product_specific_price: {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
  };
  product_category_default_name_en: string;
  color_name: string;
  images: {
    large_default: string[];
  };
  total_qty: number;
}

export interface IAmazingProduct {
  id: number;
  link: string;
  product_name: string;
  product_price: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  product_specific_price: {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
  };
  color_name: string;
  color_value: string;
  images: {
    large_default: string[];
  };
  total_qty: number;
}

export interface IBestSillingProduct {
  id: number;
  link: string;
  product_name: string;
  product_price: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  promotion_label: number;
  product_specific_price: {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
  };
  color_name: string;
  color_value: string;
  images: {
    large_default: string[];
  };
  total_qty: number;
}
