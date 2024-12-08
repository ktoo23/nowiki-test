import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PointCollection = () => {
    const navigate = useNavigate();

    const backOrderHistory = () => {
        navigate("/order-history");
    };

    const handleMenuSelectPage = () => {
        navigate("/menu-select");
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 mt-4">
            <div className="text-center">
                <span className="text-4xl block">
                    핸드폰 번호를 입력해주세요.
                </span>
                {/* 이 텍스트 크기는 작게 */}
                <div className="mt-2 text-xl">또는 이미지를 스캔해주세요.</div>
            </div>
            <input
                type="number"
                placeholder="휴대폰 번호를 입력해주세요."
                className="w-full max-w-[320px] p-2 border border-gray-300 rounded-md mt-24"
            />
            <div className="fixed bottom-32 w-full max-w-md px-4">
                <div className="flex justify-around">
                    <Button
                        onClick={handleMenuSelectPage}
                        className="w-32 h-16 bg-white text-black border border-gray-300"
                    >
                        취소
                    </Button>
                    <Button
                        onClick={backOrderHistory}
                        className="w-32 h-16 bg-yellow-400 hover:bg-yellow-500 text-black"
                    >
                        완료
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PointCollection;
