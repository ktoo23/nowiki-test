import { Button } from "@/components/ui/button";

interface CancelButtonProps {
    handleOrderCancel: () => void;
}

const CancelButton = ({ handleOrderCancel }: CancelButtonProps) => {
    return (
        <Button
            className="rounded-md p-4 w-48 h-20 text-xl"
            onClick={handleOrderCancel}
        >
            취소
        </Button>
    );
};

export default CancelButton;
