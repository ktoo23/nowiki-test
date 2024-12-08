import { cn } from "@/lib/utils";

import { Button } from '@/components/ui/button';
import { MenuCategory } from "@/types/category.interface";

type Props = {
  categories: MenuCategory[];
  onCategoryChange: (category: MenuCategory) => void;
  filters: {
    categoryId: string;
    tasteId: string;
  }
}

const Sidebar = ({ categories, onCategoryChange, filters }: Props) => {
  return (
  <nav className="pt-[10px] mr-2 sm:mr-4 px-2 h-full border-[1px] border-solid border-[#E3E3E3] rounded-[6px]">
    <h2 className="mb-5 font-bold text-2xl">메뉴</h2>
    {categories.map((category) => (
      <div
        key={category.id}
        className={`rounded-[10px] ${
          filters.categoryId === category.id
            ? "bg-mc_yellow"
            : "bg-[#F8F8F8]"
        }`}
      >
          <Button
          className={cn('mb-3 size-[100px] p-2 sm:size-[150px] flex flex-col justify-between items-center rounded-[10px] hover:bg-mc_yellow active:bg-mc_yellow', filters.categoryId === category.id ? 'bg-mc_yellow' : 'bg-[#F8F8F8]')}
          onClick={() => onCategoryChange(category)}
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