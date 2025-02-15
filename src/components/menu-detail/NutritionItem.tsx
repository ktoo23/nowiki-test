type NutritionItemProps = {
  value: string | null;
  label: string;
  dailyValue?: string | null;
};

const NutritionItem = ({ value, label, dailyValue }: NutritionItemProps) => {
  return (
    <li>
      <p className="text-[28px] font-thin leading-tight">{value}</p>
      <p className="text-sm">
        {label}
        {dailyValue ? `(${dailyValue})` : ""}
      </p>
    </li>
  );
};

export default NutritionItem;
