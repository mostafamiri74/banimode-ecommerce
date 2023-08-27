export interface ICartProduct {
  id: number;
  product_reference: string;
  link: string;
  product_name: string;
  product_price: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  quantity: number;
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
