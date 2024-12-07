export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
  image_url: string;
}
