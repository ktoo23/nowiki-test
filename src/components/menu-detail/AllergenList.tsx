type Props = {
  allergens: string[];
};

const AllergenList = ({ allergens }: Props) => {
  return (
    <>
      <p className="mb-4 text-[#808080] text-sm">
        * 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.
      </p>
      <ol className="flex gap-1 flex-wrap">
        {allergens.map((allergen, index) => (
          <li key={index}>
            {index + 1}. {allergen}
          </li>
        ))}
      </ol>
    </>
  );
};

export default AllergenList;
