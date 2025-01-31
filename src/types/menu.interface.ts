export interface IngredientsType {
  image_url: string;
  name: string;
}

export interface NutritionType {
  sugar: string | null; // 당
  protein: string | null; // 단백질
  saturated_fat: string | null; // 포화지방
  sodium: string | null; // 나트륨
  caffeine: string | null; // 카페인
}

// 함량
export interface NutritionFactsType extends NutritionType {
  weight_g: string | null; // 중량(g)
  weight_ml: string | null; // 중량(ml)
  calories: string | null; // 열량
}

// 영양소 기준치
export type NutritionDailyValueType = NutritionType;
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  taste_ids: string[];
  image_url: string;
  nutrition_facts?: NutritionFactsType;
  nutrition_daily_value?: NutritionDailyValueType;
  ingredients?: IngredientsType[];
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
