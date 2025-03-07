import { burger_categories } from "../../assets/data/category.json";

type Props = {
  filters: {
    mainCategoryId: string;
    subCategoryId: string;
    tasteId: string;
  };
  onBurgerChange: (category: { id: string; name: string }) => void;
};

const BurgerFilter = ({ filters, onBurgerChange }: Props) => {
  return (
    <nav className="flex w-full h-fit mb-2 text-lg">
      <h2 className="hidden">버거 카테고리</h2>
      <div className="grid grid-cols-4 gap-2 grow">
        {burger_categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onBurgerChange(category)}
            className={`
                py-3 px-2 rounded-lg text-lg font-semibold
                border-2 border-gray-100
                ${
                  filters.subCategoryId === category.id
                    ? "bg-mc_yellow text-black border-mc_yellow"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BurgerFilter;
