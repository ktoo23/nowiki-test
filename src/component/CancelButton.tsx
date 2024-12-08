import { Button } from "@/components/ui/button";

interface CancelButtonProps {
    handleOrderCancel: () => void;
}

const CancelButton = ({ handleOrderCancel }: CancelButtonProps) => {
    return (
        <Button className="rounded-md p-4" onClick={handleOrderCancel}>
            취소
        </Button>
    );
};

export default CancelButton;
