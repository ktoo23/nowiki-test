import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

import { menu_items, meals } from "../assets/data/menu.json";
import { MenuItem } from "@/types/menu.interface";
import GuidePopupStore from "@/store/useGuidePopupStore";

type MenuItemWithOutCategoryAndTaste = Omit<
  MenuItem,
  "category_id" | "taste_ids"
>;

const SetSelection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.itemId;
  const [menu] = menu_items.filter((item) => item.id === id);
  const { isGuideActive, setMessage, setMessages } = GuidePopupStore(
    (state) => state,
  );

  const setMenu =
    meals.filter((meal) => meal.items.includes(menu.id))[0] || null;

  const handleNavigate = (
    path: string,
    menuData: MenuItemWithOutCategoryAndTaste | null,
  ) => {
    navigate(path, { state: { menu: menuData } });
  };

  return (
    <div className="p-[30px] pt-[60px] grid grid-rows-[auto_1fr_auto] gap-[20px] max-w-screen-sm relative h-screen sm:m-auto text-mc_black text-center">
      <header className="mb-[20px]">
        <h2 className="mb-[10px] text-[30px] font-bold sm:text-[40px]">
          {menu.name}
        </h2>
        <p className="text-base sm:text-lg">
          {setMenu ? "세트 여부를 선택해주세요" : "이 상품은 단일 상품이에요"}
        </p>
      </header>
      <div className="flex h-[230px] sm:h-[350px] justify-around sm:my-auto">
        <SetSelectButton
          imageUrl={menu.image_url}
          title={menu.name}
          classname="bg-white border border-solid border-mc_yellow hover:bg-inherit"
          onNavigate={() => {
            isGuideActive &&
              setMessage(
                "더 추가할 음식이 있다면 장바구니에 넣기, \n 바로 결제하려면 주문하기를 눌러!",
              );
            handleNavigate(`/menu-select/${menu.id}`, menu);
          }}
        />
        {setMenu && (
          <SetSelectButton
            icon="🍔🍟🥤"
            title="기본 세트"
            description="(버거 + 사이드 + 음료)"
            classname="bg-mc_yellow hover:bg-mc_yellow"
            onNavigate={() => {
              isGuideActive &&
                setMessages([
                  "라지 세트는 음료수와 감자튀김의 사이즈가 커져! \n 아래 화살표를 눌러줄래?",
                  "만약 구성품을 변경하고 싶으면, 메뉴 사진 아래 변경하기를 누르면 돼!",
                ]);
              handleNavigate(`/menu-select/${setMenu.id}`, setMenu);
            }}
          />
        )}
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="w-full sm:max-w-[450px] m-auto text-lg"
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
      className={cn("w-[150px] h-full sm:w-[250px] text-mc_black", classname)}
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
