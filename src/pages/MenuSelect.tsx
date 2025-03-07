import { useLocation, useNavigate } from "react-router-dom";
import AddShoppingCartButton from "@/components/AddShoppingCartButton";
import QuickPayButton from "@/components/QuickPayButton";
import CancelButton from "@/components/CancelButton";

import { getOrderInfo, setItemToOrderInfo } from "@/feat/order";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import GuidePopup from "@/components/GuidePopup";
import useSpeechFeedback from "@/hooks/useSpeechFeedback";

const MenuSelect = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const menuData = state?.menu;

  const [currentCart, setCurrentCart]: any = useState(
    getOrderInfo().orderItem || [],
  );

  const { speak } = useSpeechFeedback();

  const handleAddShoppingCart = () => {
    setCurrentCart([...currentCart, menuData]);

    speak("장바구니에 추가되었습니다.");
    alert("장바구니에 추가되었습니다.");
  };

  const handleViewOrderHistory = () => {
    setItemToOrderInfo(menuData);
    navigate("/order-history", { state: menuData });
  };

  const handleOrderCancel = () => {
    if (currentCart.length > 0) {
      setItemToOrderInfo(menuData);
    }

    navigate("/menus");
  };

  const alertModifingMenu = () => {
    alert("메뉴 커스텀 기능은 추후 제공됩니다.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="text-center mb-8">
          <p className="text-2xl mb-2">{menuData.name}</p>
          <p className="text-2xl text-primary">
            <span className="font-bold">
              {Intl.NumberFormat().format(menuData.price)}
            </span>
            원
          </p>
        </header>

        <div className="flex justify-center">
          <div>
            <img
              src={menuData.image_url}
              alt="메인 메뉴"
              className="w-48 h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            {menuData?.items && (
              <Button
                variant="outline"
                className="mt-3"
                onClick={alertModifingMenu}
              >
                변경하기
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-5 md:flex-row sm:flex-col sm:items-center justify-center gap-4">
          <div className="flex flex-col gap-3">
            <AddShoppingCartButton
              handleAddShoppingCart={handleAddShoppingCart}
            />
            <CancelButton
              btnText="뒤로 가기"
              handleOrderCancel={handleOrderCancel}
            />
          </div>

          {currentCart.length ? (
            <Button
              variant="secondary"
              className="bg-yellow-300 w-48 h-44 text-black hover:bg-yellow-400 text-xl"
              onClick={handleViewOrderHistory}
            >
              주문하기
            </Button>
          ) : (
            <QuickPayButton handleViewOrderHistory={handleViewOrderHistory} />
          )}
        </div>

        <GuidePopup
          className="-bottom-2"
          messages={
            state.menu.items
              ? [
                  "라지 세트는 음료수와 감자튀김의 사이즈가 커져! \n 아래 화살표를 눌러줄래?",
                  "만약 구성품을 변경하고 싶으면, 메뉴 사진 아래 변경하기를 누르면 돼!",
                ]
              : [
                  "더 추가할 음식이 있다면 장바구니에 넣기, \n 바로 결제하려면 주문하기를 눌러!",
                ]
          }
        />
      </section>
    </div>
  );
};

export default MenuSelect;
