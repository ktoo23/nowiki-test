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
import { Dispatch, useState } from "react";
import { useNavigate } from "react-router-dom";
import IngredientList from "./IngredientList";
import AllergenList from "./AllergenList";
import NutritionList from "./NutritionList";
import { ChevronDown } from "lucide-react";

type Props = {
  item: MenuItem;
  open: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const MenuDetailModal = ({ item, open, setIsOpen }: Props) => {
  const naviate = useNavigate();
  const [isAllergenOpen, setIsAllergenOpen] = useState(false);
  const [isIngredientMenuOpen, setIsIngredientMenuOpen] = useState(false);

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
          <DialogDescription className="flex flex-col items-center text-base">
            {item.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {item.ingredients && (
            <>
              <strong className="text-[#292929] text-xl">재료</strong>
              <IngredientList ingredients={item.ingredients} />
            </>
          )}
          <div>
            <div className="flex justify-between">
              <strong className="block text-[#292929] text-xl">
                알레르기 정보
              </strong>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isAllergenOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsAllergenOpen((prevState) => !prevState)}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isAllergenOpen
                  ? "max-h-[80px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.allergens ? (
                <AllergenList allergens={item.allergens} />
              ) : (
                <p>-</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <strong className="block text-[#292929] text-xl">영양정보</strong>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isIngredientMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() =>
                  setIsIngredientMenuOpen((prevState) => !prevState)
                }
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isIngredientMenuOpen
                  ? "max-h-[190px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.nutrition_facts ? (
                <NutritionList
                  nutritionFacts={item.nutrition_facts!}
                  nutritionDailyValue={item.nutrition_daily_value!}
                />
              ) : (
                <p>-</p>
              )}
            </div>
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
