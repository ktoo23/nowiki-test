import { useMemo, useState } from 'react';

import { menu_items } from '../assets/data/menu.json';
import { menu_categories } from '../assets/data/category.json';
import { MenuCategory } from '../types/category.interface';
import Header from '@/component/menu-list/Header';
import Sidebar from '@/component/menu-list/Sidebar';
import TasteFilter from '@/component/menu-list/TasteFilter';
import FilteredMenuList from '@/component/menu-list/FilteredMenuList';
import TooltipWrapper from '@/components/tooltip/TooltipWrapper';
import VoiceBtn from '@/component/voice/VoiceBtn';

const defaultCategoryId = menu_categories[0].id;

const MenuList = () => {

  const [filters, setFilters] = useState({
    categoryId: defaultCategoryId,
    tasteId: '',
  });

  const filteredList = useMemo(() => {
    return menu_items.filter((item) => {
      const matchesCategory = item.category_id === filters.categoryId;
      const matchesTaste =
        filters.tasteId === '' ||
        item.taste_ids.includes(filters.tasteId);
      return matchesCategory && matchesTaste;
    });
  }, [filters, menu_items]);

  const menuCategory = menu_categories.find(menu => menu.id === filters.categoryId);

  const handleCategory = (category: MenuCategory) => {
    setFilters((prev) => ({
      ...prev,
      categoryId: category.id,
      tasteId: '',
    }));
  };

  const handleTaste = (tasteId: string) => {
    setFilters((prev) => ({
      ...prev,
      tasteId
    }));
  }

  if (!menuCategory) return null;

  return (
    <div>
      <div className="max-w-screen-sm relative sm:m-auto text-mc_black ">
        <div className="flex">
          <div className="w-[120px] sm:w-[180px] bg-slate-400">
            <img src="" alt="" />
            {/* logo img */}
          </div>
          <Header name={menuCategory.name as "버거" | "사이드" | "치킨" | "음료" | "디저트"} description={menuCategory?.description} />
          <VoiceBtn />
        </div>
        <div className="flex">
          <Sidebar categories={menu_categories} onCategoryChange={handleCategory} filters={filters} />
          <div className="grow pt-5">
            {menuCategory?.name === "버거" && (
              <TasteFilter filters={filters} onTasteChange={handleTaste} />
            )}
            <FilteredMenuList items={filteredList} />
          </div>
        </div>
      </div>
      <div className='fixed bottom-2 left-20 w-full flex items-center'>
        <TooltipWrapper />
      </div>
    </div>
  );
}

export default MenuList;