import { useNavigate } from "react-router-dom";

import { MenuItem } from "@/types/menu.interface";

type Props = {
  items: MenuItem[];
}

const FilteredMenuList = ({ items }: Props) => {
  const naviate = useNavigate();

  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-[#F8F8F8] rounded-[10px] text-center cursor-pointer"
            onClick={() => naviate('/set-choice')}
          >
            <div className='mb-2'>
              <img
                src={item.image_url}
                alt=""
                className="block size-full rounded-[10px] rounded-b-none"
              />
            </div>
            <strong className="mb-2 text-md sm:text-lg">{item.name}</strong>
            <p className="mb-2 sm:text-lg">{Intl.NumberFormat().format(item.price)}원</p>
          </li>
        ))}
      </ul>
  )
}

export default FilteredMenuList;