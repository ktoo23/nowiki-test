// import { cn } from "@/lib/utils";

// import { Button } from "@/components/ui/button";
// import { MenuCategory } from "@/types/category.interface";
// import React, { useEffect, useRef } from "react";
// import useGuidePopupStore from "@/store/useGuidePopupStore";

// type Props = {
//   categories: MenuCategory[];
//   onCategoryChange: (category: MenuCategory) => void;
//   onUpdateMessages: (messages: string[]) => void;
//   filters: {
//     mainCategoryId: string;
//     subCategoryId: string;
//     tasteId: string;
//   };
// };

// const Sidebar = ({
//   categories,
//   onCategoryChange,
//   onUpdateMessages,
//   filters,
// }: Props) => {
//   const { isGuideActive } = useGuidePopupStore((state) => state);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const showMessage = (value: string) => {
//     let message = "";
//     switch (value) {
//       case "버거":
//         message = `햄버거를 선택했구나!\n 햄버거는 맛별로 나눠져있으니, 원하는 맛을 골라!`;
//         break;
//       case "치킨":
//         message = "메뉴에 스파이시가 들어가면 매콤할 수도 있으니 조심!";
//         break;
//       case "사이드":
//         message =
//           "햄버거만 먹으면 출출하다구. . \n오, 해시브라운도 있네! 다진 감자 튀김이라고 생각하면 돼~";
//     }
//     onUpdateMessages([message]);

//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       onUpdateMessages([
//         "화면에 손가락을 대고 위, 아래로 움직여봐. \n 숨어있던 메뉴들이 보이네!",
//       ]);
//     }, 4000);
//   };

//   const activateCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const { value } = event.currentTarget;

//     const categoryToGive = categories.find(
//       (category) => category.name === value,
//     ) as MenuCategory;

//     if (isGuideActive) showMessage(value);

//     onCategoryChange(categoryToGive);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <nav className="pt-[10px] mr-2 sm:mr-4 px-2 h-full border-[1px] border-solid border-[#E3E3E3] rounded-[6px]">
//       <h2 className="mb-5 font-bold text-2xl">메뉴</h2>
//       {categories.map((category) => (
//         <div
//           key={category.id}
//           className={`rounded-[10px] ${
//             filters.mainCategoryId === category.id
//               ? "bg-mc_yellow"
//               : "bg-[#F8F8F8]"
//           }`}
//         >
//           <Button
//             value={category.name}
//             className={cn(
//               "mb-3 size-[100px] p-2 sm:size-[150px] flex flex-col justify-between items-center rounded-[10px] hover:bg-mc_yellow active:bg-mc_yellow",
//               filters.mainCategoryId === category.id
//                 ? "bg-mc_yellow"
//                 : "bg-[#F8F8F8]",
//             )}
//             onClick={activateCategory}
//           >
//             <div className="mb-1 rounded-[10px] overflow-hidden">
//               <img
//                 src={category.image_url}
//                 alt=""
//                 className="block size-full"
//               />
//             </div>
//             <p className="text-black sm:text-lg">{category.name}</p>
//           </Button>
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Sidebar;

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuCategory } from "@/types/category.interface";
import React, { useEffect, useRef, useState } from "react";
import useGuidePopupStore from "@/store/useGuidePopupStore";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  categories: MenuCategory[];
  onCategoryChange: (category: MenuCategory) => void;
  onUpdateMessages: (messages: string[]) => void;
  filters: {
    mainCategoryId: string;
    subCategoryId: string;
    tasteId: string;
  };
};

const Sidebar = ({
  categories,
  onCategoryChange,
  onUpdateMessages,
  filters,
}: Props) => {
  const { isGuideActive } = useGuidePopupStore((state) => state);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [page, setPage] = useState(0);

  // 한 페이지에 보여줄 카테고리 수
  const categoriesPerPage = 4;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  // 현재 페이지에 보여줄 카테고리들
  const visibleCategories = categories.slice(
    page * categoriesPerPage,
    (page + 1) * categoriesPerPage,
  );

  const showMessage = (value: string) => {
    let message = "";
    switch (value) {
      case "버거":
        message = `햄버거를 선택했구나!\n 햄버거는 맛별로 나눠져있으니, 원하는 맛을 골라!`;
        break;
      case "치킨":
        message = "메뉴에 스파이시가 들어가면 매콤할 수도 있으니 조심!";
        break;
      case "사이드":
        message =
          "햄버거만 먹으면 출출하다구. . \n오, 해시브라운도 있네! 다진 감자 튀김이라고 생각하면 돼~";
    }
    onUpdateMessages([message]);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onUpdateMessages([
        "화면에 손가락을 대고 위, 아래로 움직여봐. \n 숨어있던 메뉴들이 보이네!",
      ]);
    }, 4000);
  };

  const activateCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    const categoryToGive = categories.find(
      (category) => category.name === value,
    ) as MenuCategory;

    if (isGuideActive) showMessage(value);

    onCategoryChange(categoryToGive);
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-full border-[1px] border-solid border-[#E3E3E3] rounded-[6px] mr-2 sm:mr-4 px-2">
      <h2 className="my-3 font-bold text-2xl text-center">메뉴</h2>

      {/* 페이지 위 버튼 */}
      {page > 0 && (
        <Button
          variant="ghost"
          onClick={prevPage}
          className="mx-auto mb-2 p-1 hover:bg-gray-100"
          aria-label="이전 메뉴"
        >
          <ChevronUp size={24} />
        </Button>
      )}

      {/* 메뉴 카테고리 */}
      <div className="flex-1">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            className={`mb-4 rounded-[10px] transition-all ${
              filters.mainCategoryId === category.id
                ? "bg-mc_yellow"
                : "bg-[#F8F8F8]"
            }`}
          >
            <Button
              value={category.name}
              className={cn(
                "w-full h-fit p-2 flex items-center rounded-[10px] text-left relative",
                "hover:bg-mc_yellow active:bg-mc_yellow",
                "",
                filters.mainCategoryId === category.id
                  ? "bg-mc_yellow after:content-[''] after:w-[106px] after:h-[22px] after:z-10 after:absolute after:-bottom-5 after:right-[50px] after:bg-[url(/image/bg_flow.png)] after:bg-no-repeat after:bg-cover after:opacity-100"
                  : "bg-[#F8F8F8]",
              )}
              onClick={activateCategory}
            >
              <div className="flex-shrink-0 mr-3 w-16 h-16 rounded-[8px] overflow-hidden">
                <img
                  src={category.image_url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black text-xl font-semibold">
                {category.name}
              </p>
            </Button>
          </div>
        ))}
      </div>

      {/* 페이지 아래 버튼 */}
      {page < totalPages - 1 && (
        <Button
          variant="ghost"
          onClick={nextPage}
          className="mx-auto mt-2 mb-4 p-1 hover:bg-gray-100"
          aria-label="다음 메뉴"
        >
          <ChevronDown size={24} />
        </Button>
      )}

      {/* 페이지 인디케이터 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-1 my-5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${page === index ? "bg-mc_yellow" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
