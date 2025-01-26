import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types/menu.interface";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  item: MenuItem;
  open: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const MenuDetailModal = ({ item, open, setIsOpen }: Props) => {
  console.log(item);
  const naviate = useNavigate();

  if (open === false) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex-col justify-center items-center">
          <DialogTitle className="text-center">{item.name}</DialogTitle>
          <div className="w-[200px] h-auto">
            <img src={item.image_url} alt="메뉴 대표 사진" />
          </div>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>{item.name} 구성품</div>
          <div className="flex gap-1">
            {item.ingredients?.map((ingredient, index) => (
              <p key={index} className="size-12">
                <img
                  src={ingredient}
                  className="block size-full object-cover"
                />
              </p>
            ))}
          </div>
          <div>
            <div>알레르기 정보</div>
            <p>
              * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고
              있습니다.
            </p>
            <ol className="flex gap-1">
              {item.allergens?.map((allergen, index) => (
                <li key={index}>
                  {index + 1}. {allergen}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => naviate(`/set-choice/${item.id}`)}
            className="bg-mc_yellow text-black hover:bg-mc_yellow/80"
          >
            선택하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuDetailModal;
