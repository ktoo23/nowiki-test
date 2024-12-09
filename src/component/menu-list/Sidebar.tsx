import { cn } from "@/lib/utils";

import { Button } from '@/components/ui/button';
import { MenuCategory } from "@/types/category.interface";
import React from "react";
import tooltipStore from "@/store/tooltipStore";

type Props = {
  categories: MenuCategory[];
  onCategoryChange: (category: MenuCategory) => void;
  filters: {
    categoryId: string;
    tasteId: string;
  }
}

const Sidebar = ({ categories, onCategoryChange, filters }: Props) => {

  const { setTooltipString } = tooltipStore(state => state);

  const activateCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    const categoryToGive = categories.find(category => category.name === value) as MenuCategory
    const chosenSideType = value + (value === "치킨" ? '을' : "를");

    setTooltipString(`${chosenSideType} 선택했구나!\n 그럼 원하는 맛을 생각해봐!`);
    onCategoryChange(categoryToGive);
  }

  return (
    <nav className="pt-[10px] mr-2 sm:mr-4 px-2 h-full border-[1px] border-solid border-[#E3E3E3] rounded-[6px]">
      <h2 className="mb-5 font-bold text-2xl">메뉴</h2>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`rounded-[10px] ${filters.categoryId === category.id
            ? "bg-mc_yellow"
            : "bg-[#F8F8F8]"
            }`}
        >
          <Button
            value={category.name}
            className={cn('mb-3 size-[100px] p-2 sm:size-[150px] flex flex-col justify-between items-center rounded-[10px] hover:bg-mc_yellow active:bg-mc_yellow', filters.categoryId === category.id ? 'bg-mc_yellow' : 'bg-[#F8F8F8]')}
            onClick={activateCategory}
          >
            <div className="mb-1 rounded-[10px] overflow-hidden">
              <img
                src={category.image_url}
                alt=""
                className="block size-full"
              />
            </div>
            <p className='text-black sm:text-lg'>{category.name}</p>
          </Button>
        </div>
      ))}
    </nav>
  )
}

export default Sidebar;