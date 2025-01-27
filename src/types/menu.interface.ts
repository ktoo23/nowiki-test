export interface ingredientsType {
  image_url: string;
  name: string;
}
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  taste_ids: string[];
  image_url: string;
  ingredients?: ingredientsType[];
  allergens?: string[];
}
export interface MenuItemWithCount {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  taste_ids: string[];
  image_url: string;
  count: number;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  image_url: string;
}
