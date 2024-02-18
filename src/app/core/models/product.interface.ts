export interface IProduct {
  id: number;
  product_name: string;
  product_price: number;
  product_manufacturer_en_name: string;
  product_manufacturer_fa_name: string;
  specific_price: number;
  product_specific_price: {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
  };
  large_default: string[];
  brand: string;
  total_qty: number;
  reference?: string;
  product_reference?: string;
  discount_percent: number;
  quantity: number;
  promotion_label: PromotionLabel;
}

export interface PromotionLabel {
  title: string;
  icon: string;
  background_color: string;
  text_color: string;
  icon_color: string;
}

export interface IAmazingProduct {
  pictures: string[];
  discount_percent: number;
  total_qty: number;
  product_manufacturer_en_name: string;
  specific_price: number;
  product_name: string;
  product_price: number;
}

export interface IBestSillingProduct extends IAmazingProduct {
  promotion_label: number;
}
