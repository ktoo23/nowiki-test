import {
  NutritionDailyValueType,
  NutritionFactsType,
} from "@/types/menu.interface";
import NutritionItem from "./NutritionItem";

type Props = {
  nutritionFacts: NutritionFactsType;
  nutritionDailyValue: NutritionDailyValueType;
};

const NutritionList = ({ nutritionFacts, nutritionDailyValue }: Props) => {
  const nutritionData = [
    { value: nutritionFacts.weight_g, label: "중량(g)" },
    { value: nutritionFacts.calories, label: "열량" },
    {
      value: nutritionFacts.sugar,
      label: "당",
      dailyValue: nutritionDailyValue.sugar,
    },
    {
      value: nutritionFacts.protein,
      label: "단백질",
      dailyValue: nutritionDailyValue.protein,
    },
    {
      value: nutritionFacts.saturated_fat,
      label: "포화지방",
      dailyValue: nutritionDailyValue.saturated_fat,
    },
    {
      value: nutritionFacts.sodium,
      label: "나트륨",
      dailyValue: nutritionDailyValue.sodium,
    },
  ];

  return (
    <>
      <div className="mb-[13px] mt-[7px]">
        <ul className="grid grid-cols-2 gap-2 text-center text-[#3a3a3a]">
          {nutritionData.map((item, index) => (
            <NutritionItem
              key={index}
              value={item.value}
              label={item.label}
              dailyValue={item.dailyValue}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NutritionList;
