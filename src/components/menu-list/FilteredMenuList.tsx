import { MenuItem } from "@/types/menu.interface";
import FilteredMenuItem from "./FilteredMenuItem";

type Props = {
  items: MenuItem[];
};

const FilteredMenuList = ({ items }: Props) => {
  return (
    <>
      <ul
        className={`max-h-[800px] overflow-y-auto grid grid-cols-2 gap-4 sm:gap-6`}
      >
        {items.map((item) => (
          <FilteredMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default FilteredMenuList;
