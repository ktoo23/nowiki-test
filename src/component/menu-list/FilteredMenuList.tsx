import { useNavigate } from "react-router-dom";

import { MenuItem } from "@/types/menu.interface";
import { useEffect, useRef, useState } from "react";
import tooltipStore from "@/store/tooltipStore";

type Props = {
  items: MenuItem[];
};

const FilteredMenuList = ({ items }: Props) => {
  const { setTooltipString } = tooltipStore(state => state);

  const scrollableRef = useRef<HTMLUListElement>(null); // 스크롤 감지 대상 요소

  const [scrollPosition, setScrollPosition] = useState(0);
  const [heightClass, setHeightClass] = useState('');

  const naviate = useNavigate();

  //스크롤 감지하는 useEffect
  useEffect(() => {
    const element = scrollableRef.current;
    const handleScroll = () => element && setScrollPosition(element.scrollTop);

    element?.addEventListener("scroll", handleScroll);

    return () => element?.removeEventListener("scroll", handleScroll);
  }, []);

  //스크롤이 감지되고 특정 상황이면 뉴비 문구 띄우는 useEffect
  useEffect(() => {
    if (scrollPosition !== 0) {
      return setTooltipString("스크롤 하면 다른 버거도 나왕~");
    }
    setTooltipString('왼쪽을 보면 원하는 메뉴를 선택할 수 이써!');

    if (localStorage.getItem('customerType') === "newbie") return setHeightClass("h-[65vh] overflow-scroll");


  }, [scrollPosition, setTooltipString]);

  return (
    <ul
      ref={scrollableRef}
      className={`${heightClass} overflow-scroll grid grid-cols-2 gap-4 sm:gap-6`}>
      {items.map((item) => (
        <li
          key={item.id}
          className="sm:max-h-[220px] bg-[#F8F8F8] rounded-[10px] text-center cursor-pointer"
          onClick={() => naviate(`/set-choice/${item.id}`)}
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
