export interface IProduct {
  id: string;
  id_product: number;
  id_product_attribute: number;
  id_color: number;
  product_reference: string;
  link: string;
  color_link: string;
  product_name: string;
  product_price: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  product_manufacturer_id: number;
  product_manufacturer_slug: string;
  product_specific_price: null;
  product_category_default_name_en: string;
  color_name: string;
  color_slug: string;
  color_value: string;
  id_color_group: number;
  images: Images;
  videos: any[];
  total_qty: number;
  size: Size[];
  product_size_guide: Array<string[]>;
  product_category_size_guide: null;
  promotion_label: PromotionLabel;
  club_label: null;
  banijet_tag: null;
  available_notify: boolean;
  all_colors_pwa: AllColorsPwa[];
  flash_sale_message_show: boolean;
  flash_sale_message: any[];
  all_colors: AllColor[];
  all_colors_count: number;
}

export interface AllColor {
  image: Image[];
  name: string;
  id: number;
  value: string;
  slug: string;
}

export interface Image {
  image_size: ImageSize;
  alt: string;
  title: string;
}

export interface ImageSize {
  large_default: string;
  cart_default: string;
  zoom: string;
  thickbox_default: string;
  small_default: string;
  home_default: string;
  medium_default: string;
  thickbox_default2x: string;
}

export interface AllColorsPwa {
  name: string;
  value: string;
  slug: string;
}

export interface Images {
  large_default: string[];
  cart_default: string[];
  zoom: string[];
  thickbox_default: string[];
  small_default: string[];
  home_default: string[];
  medium_default: string[];
  thickbox_default2x: string[];
}

export interface PromotionLabel {
  title: string;
  icon: string;
  background_color: string;
  text_color: string;
  icon_color: string;
}

export interface Size {
  reference: string;
  quantity: number;
  specific_price: null;
  id_product_attribute: number;
  id_size: number;
  name: string;
  extra_barcodes: any[];
  active: number;
  position: number;
  slug: string;
}
