import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const VoiceBtn = () => {

  const navigate = useNavigate();


  return (
    <div className="flex items-center">
      <Button className="bg-mc_yellow text-black" onClick={() => navigate('/voice-order')}>
        <p>음성으로 주문하기</p>
      </Button>
    </div>
  )
}

export default VoiceBtn