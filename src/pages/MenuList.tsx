import { useMemo, useState } from "react";

import { menu_items } from "../assets/data/menu.json";
import {
  menu_categories,
  burger_categories,
} from "../assets/data/category.json";
import { BurgerCategory, MenuCategory } from "../types/category.interface";
import Header from "@/components/menu-list/Header";
import Sidebar from "@/components/menu-list/Sidebar";
import TasteFilter from "@/components/menu-list/TasteFilter";
import FilteredMenuList from "@/components/menu-list/FilteredMenuList";
import VoiceBtn from "@/components/voice/VoiceBtn";
import CartButton from "@/components/CartButton";
import GuidePopup from "@/components/GuidePopup";
import { MenuItem } from "@/types/menu.interface";
import BurgerFilter from "@/components/menu-list/BurgerFilter";

const defaultMainCategoryId = menu_categories[0].id; // 버거
const defaultSubCategoryId = burger_categories[0].id; // 비프

const WELCOME_MESSAGES = [
  "안녕! 내 이름은 위키야! ! \n 아래 화살표를 눌러줄래?",
  "음성으로도 주문할 수 있어! \n필요하면 오른쪽 상단의 음성 주문하기 버튼을 눌러봐~",
];

const MenuList = () => {
  const [filters, setFilters] = useState({
    mainCategoryId: defaultMainCategoryId,
    subCategoryId: defaultSubCategoryId,
    tasteId: "",
  });

  const [guideMessages, setGuideMessages] = useState(WELCOME_MESSAGES);

  const filteredList = useMemo(() => {
    return menu_items.filter((item: MenuItem) => {
      const matchesMainCategory =
        item.main_category_id === filters.mainCategoryId;
      const matchesSubCategory =
        filters.subCategoryId === "" ||
        item.sub_category_id === filters.subCategoryId;
      const matchesTaste =
        filters.tasteId === "" || item.taste_ids?.includes(filters.tasteId);
      return matchesMainCategory && matchesSubCategory && matchesTaste;
    });
  }, [filters, menu_items]);

  const menuCategory = menu_categories.find(
    (menu) => menu.id === filters.mainCategoryId,
  );

  // 사이드바에서 카테고리 변경 시 메시지 업데이트 핸들러
  const handleUpdateMessages = (messages: string[]) => {
    setGuideMessages(messages);
  };

  const handleMainCategory = (category: MenuCategory) => {
    if (category.name === "버거") {
      setFilters((prev) => ({
        ...prev,
        mainCategoryId: defaultMainCategoryId,
        subCategoryId: defaultSubCategoryId,
        tasteId: "",
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        mainCategoryId: category.id,
        subCategoryId: "",
        tasteId: "",
      }));
    }
  };

  const handleSubCategory = (category: BurgerCategory) => {
    setFilters((prev) => ({
      ...prev,
      subCategoryId: category.id,
      tasteId: "",
    }));
  };

  const handleTaste = (tasteId: string) => {
    setFilters((prev) => ({
      ...prev,
      tasteId,
    }));
  };

  if (!menuCategory) return null;

  return (
    <div>
      <div className="max-w-screen-sm relative sm:m-auto text-mc_black ">
        <div className="flex">
          <div className="w-[120px] sm:w-[150px]">
            <img src="/image/wiki.png" alt="로고 이미지" />
          </div>
          <Header
            name={
              menuCategory.name as
                | "버거"
                | "사이드"
                | "치킨"
                | "음료"
                | "디저트"
            }
            description={menuCategory?.description}
          />
          <div className="flex gap-2">
            <VoiceBtn />
            <CartButton />
          </div>
        </div>
        <div className="flex">
          <Sidebar
            categories={menu_categories}
            onCategoryChange={handleMainCategory}
            onUpdateMessages={handleUpdateMessages}
            filters={filters}
          />
          <div className="grow">
            {menuCategory?.name === "버거" && (
              <>
                <BurgerFilter
                  filters={filters}
                  onBurgerChange={handleSubCategory}
                />
                <TasteFilter filters={filters} onTasteChange={handleTaste} />
              </>
            )}
            <FilteredMenuList items={filteredList} />
            <GuidePopup messages={guideMessages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
