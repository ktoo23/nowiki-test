const TooltipBox = () => {

  const boxString = "자리에 앉아있어! 주문한 메뉴가져다 줄게";

  return (
    <div className="flex items-center justify-center bg-help_bg rounded-xl p-4 shadow-md w-80 max-w-md text-gray-800 font-medium text-base h-20">
      <p className="">{boxString}</p>
    </div>
  )
}

export default TooltipBox