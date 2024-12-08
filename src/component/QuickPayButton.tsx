import { Button } from "@/components/ui/button";

interface QuickPayProps {
    handleViewOrderHistory: () => void;
}

const QuickPayButton = ({ handleViewOrderHistory }: QuickPayProps) => {
    return (
        <Button
            className="bg-yellow-300 h-20 text-black"
            onClick={handleViewOrderHistory}
        >
            바로 결제하기
        </Button>
    );
};

export default QuickPayButton;
