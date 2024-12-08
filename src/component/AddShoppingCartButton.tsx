import { Button } from "@/components/ui/button";

interface AddShoppingCartButtonProps {
    handleAddShoppingCart: () => void;
}

const AddShoppingCartButton = ({
    handleAddShoppingCart
}: AddShoppingCartButtonProps) => {
    return (
        <Button className="rounded-md p-4" onClick={handleAddShoppingCart}>
            장바구니에 넣기
        </Button>
    );
};

export default AddShoppingCartButton;
