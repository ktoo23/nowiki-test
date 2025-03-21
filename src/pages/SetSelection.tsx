import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

import { menu_items, meals } from "../assets/data/menu.json";
import { MenuItem } from "@/types/menu.interface";

type MenuItemWithOutCategoryAndTaste = Omit<
  MenuItem,
  "main_category_id" | "taste_ids"
>;

const SetSelection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.itemId;
  const [menu] = menu_items.filter((item) => item.id === id);

  const setMenu =
    meals.filter((meal) => meal.items[0].includes(menu.id))[0] || null;

  const handleNavigate = (
    path: string,
    menuData: MenuItemWithOutCategoryAndTaste | null,
  ) => {
    navigate(path, { state: { menu: menuData } });
  };

  return (
    <div className="max-w-[640px] content-center h-dvh text-mc_black text-center">
      <header className="mb-[20px]">
        <h2 className="mb-[10px] text-[30px] font-bold sm:text-[40px]">
          {menu.name}
        </h2>
        <p className="text-base sm:text-lg">
          {setMenu ? "세트 여부를 선택해주세요" : "이 상품은 단일 상품이에요"}
        </p>
      </header>
      <div className="flex justify-around px-8 items-center sm:my-auto">
        <SetSelectButton
          imageUrl={menu.image_url}
          title="단품"
          classname="bg-gray-50 shadow-md border-2 border-gray-100 hover:border-mc_yellow hover:bg-gray-50 transition-all"
          onNavigate={() => {
            handleNavigate(`/menu-select/${menu.id}`, menu);
          }}
        />
        {setMenu && (
          <SetSelectButton
            icon="🍔🍟🥤"
            title="기본 세트"
            description="(버거 + 사이드 + 음료)"
            classname="bg-mc_yellow hover:bg-mc_yellow/80"
            onNavigate={() => {
              handleNavigate(`/menu-select/${setMenu.id}`, setMenu);
            }}
          />
        )}
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="w-full sm:max-w-[450px] m-auto text-lg mt-10"
        onClick={() => handleNavigate("/menus", null)}
      >
        취소
      </Button>
    </div>
  );
};

export default SetSelection;

type Props = {
  icon?: string;
  title: string;
  description?: string;
  classname?: string;
  onNavigate: () => void;
  imageUrl?: string;
};

const SetSelectButton = ({
  classname,
  icon,
  title,
  description,
  onNavigate,
  imageUrl,
}: Props) => {
  return (
    <Button
      className={cn("h-[400px] w-[250px] text-mc_black shadow-md", classname)}
      onClick={onNavigate}
    >
      <div className="flex flex-col items-center justify-center">
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="단일 상품 이미지" />
          </div>
        )}
        {icon && <p className="text-[30px] sm:text-[40px]">{icon}</p>}
        <p className="mt-5 text-base sm:text-[24px]">{title}</p>
        <p className="text-sm sm:text-lg">{description}</p>
      </div>
    </Button>
  );
};
