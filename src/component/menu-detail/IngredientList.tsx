type Ingredient = {
  id: string;
  name: string;
  image_url: string;
};

type Props = {
  ingredients: Ingredient[];
};

const IngredientList = ({ ingredients }: Props) => {
  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className="flex flex-col items-center justify-center"
        >
          <p className="size-[100px]">
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
  );
};

export default IngredientList;
