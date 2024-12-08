
import TooltipBox from "./TooltipBox"
import TooltipDiamond from "./TooltipDiamond"

const TooltipWrapper = () => {

  const isTooltipShow = localStorage.getItem("customerType") === "newbie" &&
    <div className="flex flex-col">
      <TooltipDiamond />
      <TooltipBox />
    </div>;

  return (
    <>
      {isTooltipShow}
    </>
  )
}

export default TooltipWrapper