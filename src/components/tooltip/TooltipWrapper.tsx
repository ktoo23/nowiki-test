
import TooltipBox from "./TooltipBox"
import TooltipDiamond from "./TooltipDiamond"

const TooltipWrapper = () => {

  return (
    <div className="flex flex-col">
      <TooltipDiamond />
      <TooltipBox />
    </div>
  )
}

export default TooltipWrapper