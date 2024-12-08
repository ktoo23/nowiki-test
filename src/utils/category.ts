export type CategoryIconType = {
  '버거': string;
  '사이드': string;
  '치킨': string;
  '음료': string;
  '디저트': string;
};

export const categoryIcon: CategoryIconType = {
  '버거': '🍔',
  '사이드': '🍟',
  '치킨': '🍗',
  '음료': '🥤',
  '디저트': '🍦'
};

export const getCategoryIcon = (category: keyof CategoryIconType) => categoryIcon[category];