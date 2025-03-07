import { MenuItem } from "@/types/menu.interface";
import FilteredMenuItem from "./FilteredMenuItem";
import EmptyNotice from "../EmptyNotice";

type Props = {
  items: MenuItem[];
};

const FilteredMenuList = ({ items }: Props) => {
  if (items.length === 0) {
    return <EmptyNotice />;
  }
  return (
    <>
      <ul
        className={`max-h-[600px] overflow-y-auto grid grid-cols-2 gap-4 sm:gap-6`}
      >
        {items.map((item) => (
          <FilteredMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default FilteredMenuList;
