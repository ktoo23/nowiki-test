import tooltipStore from "../../store/tooltipStore";
import { useLocation } from "react-router-dom";

const TooltipBox = () => {

  const { tooltipString } = tooltipStore(state => state);

  const { pathname } = useLocation();

  const makeBoxString = () => {
    let boxString = '';
    switch (pathname) {
      case '/food-offer':
        boxString = "자리에 앉아있어! 주문한 메뉴가져다 줄게";
        break

      case '/menu-select':
        boxString = "라지세트는 감자튀김과 음료수\n크기가 커지는거야!";
        break

      default:
        boxString = tooltipString;
        break
    }
    return boxString
  };

  return (
    <div className="flex items-center justify-center bg-help_bg rounded-xl p-4 shadow-md w-80 max-w-md text-gray-800 font-medium text-base h-20">
      <p className="text-gray-800 whitespace-pre-line">{makeBoxString()}</p>
    </div>
  )
}

export default TooltipBox