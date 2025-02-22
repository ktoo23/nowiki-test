import { MenuItem } from "@/types/menu.interface";
import { useState } from "react";
import MenuDetailModal from "../menu-detail/MenuDetailModal";

type FilteredMenuItemProps = {
  item: MenuItem;
};

const FilteredMenuItem = ({ item }: FilteredMenuItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li
        key={item.id}
        className="sm:max-h-[220px] bg-[#F8F8F8] rounded-[10px] text-center cursor-pointer hover:bg-[#F8F8F8]/60"
        onClick={() => setIsModalOpen((prevState) => !prevState)}
      >
        <div className="mb-2">
          <img
            src={item.image_url}
            alt=""
            className="block size-full rounded-[10px] rounded-b-none"
          />
        </div>
        <strong className="mb-2 text-md sm:text-lg">{item.name}</strong>
        <p className="mb-2 sm:text-lg">
          {Intl.NumberFormat().format(item.price)}원
        </p>
      </li>
      {isModalOpen && (
        <MenuDetailModal
          item={item}
          open={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default FilteredMenuItem;
