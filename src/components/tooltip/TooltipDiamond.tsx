import { WIKI_FAIRY_URL } from "@/types/constants"
import { Avatar, AvatarImage } from "../ui/avatar"

const TooltipDiamond = () => {

  return (
    <div className="flex justify-space-between relative top-6">
      <div className="relative">
        <div
          className="w-0 h-0 border-r-[3rem] border-t-[1.5rem] border-b-[1.5rem] border-transparent border-r-help_diamond_bg"
        ></div>
        <div
          className="w-0 h-0 border-l-[3rem] border-t-[1.5rem] border-b-[1.5rem] border-transparent border-l-help_diamond_bg absolute top-0 left-[3rem]"
        ></div>
        <div className="absolute top-1/2 left-12 -translate-x-1/2 -translate-y-1/2 text-black w-10">
          위키
        </div>
      </div>
      <Avatar className="ml-4">
        <AvatarImage
          className=""
          src={WIKI_FAIRY_URL}
          alt="Burger Mascot"
        />
      </Avatar>
    </div>
  )
}

export default TooltipDiamond