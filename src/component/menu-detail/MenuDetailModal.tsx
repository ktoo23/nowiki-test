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
  const naviate = useNavigate();

  if (open === false) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="sm:max-w-[425px] sm:h-[80vh] md:h-[70vh] overflow-hidden overflow-y-auto scrollbar-hide">
        <DialogHeader className="flex-col justify-center items-center">
          <DialogTitle className="text-center text-2xl">
            {item.name}
          </DialogTitle>
          <div className="w-[200px] h-auto">
            <img src={item.image_url} alt="메뉴 대표 사진" />
          </div>
          {item.description.split("\n").map((line, index) => (
            <span key={index} className="text-[#808080]">
              {line}
              <br />
            </span>
          ))}
        </DialogHeader>
        <div className="grid gap-4">
          {item.ingredients && (
            <>
              <strong className="text-[#292929] text-xl">재료</strong>
              <div className="flex gap-1 flex-wrap justify-center">
                {item.ingredients?.map((ingredient, index) => (
                  <div className="flex flex-col items-center justify-center">
                    <p key={index} className="size-[100px]">
                      {ingredient.image_url ? (
                        <img
                          alt="재료 사진"
                          src={ingredient.image_url}
                          className="block size-full object-cover"
                        />
                      ) : (
                        <p className="size-full flex items-center justify-center text-[#808080]">
                          이미지 준비중
                        </p>
                      )}
                    </p>
                    <span className="text-[#808080]">{ingredient.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
          <div>
            <strong className="block text-[#292929] text-xl">
              알레르기 정보
            </strong>
            <p className="mb-4 text-[#808080] text-sm">
              * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고
              있습니다.
            </p>
            <ol className="flex gap-2 flex-wrap">
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
