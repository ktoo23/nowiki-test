import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

import { menu_items } from "../assets/data/menu.json";

const SetSelection = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.itemId;
    const [menu] = menu_items.filter((item) => item.id === id);

    const handleNavigate = (path: string) => {
        navigate(`${path}`);
    };

    return (
        <div className="p-[30px] pt-[60px] grid grid-rows-[auto_1fr_auto] gap-[20px] max-w-screen-sm relative h-screen sm:m-auto text-mc_black text-center">
            <header className="mb-[20px]">
                <h2 className="mb-[10px] text-[30px] font-bold sm:text-[40px]">
                    {menu.name}
                </h2>
                <p className="text-base sm:text-lg">세트 여부를 선택해주세요</p>
            </header>
            <div className="flex h-[230px] sm:h-[350px] justify-around sm:my-auto">
                <SetSelectButton
                    icon="🍔"
                    title="햄버거만"
                    classname="bg-white border border-solid border-mc_yellow hover:bg-inherit"
                    onNavigate={() => handleNavigate(`/menu-select/${menu.id}`)}
                />
                <SetSelectButton
                    icon="🍔🍟🥤"
                    title="기본 세트"
                    description="(버거 + 사이드 + 음료)"
                    classname="bg-mc_yellow hover:bg-mc_yellow"
                    onNavigate={() => handleNavigate(`/menu-select/${menu.id}`)}
                />
            </div>
            <Button
                size="lg"
                variant="secondary"
                className="w-full sm:max-w-[450px] m-auto text-lg"
                onClick={() => handleNavigate("/menus")}
            >
                취소
            </Button>
        </div>
    );
};

export default SetSelection;

type Props = {
    icon: string;
    title: string;
    description?: string;
    classname?: string;
    onNavigate: (path: string) => void;
};

const SetSelectButton = ({
    classname,
    icon,
    title,
    description,
    onNavigate
}: Props) => {
    const params = useParams();
    const id = params.itemId;
    return (
        <Button
            className={cn(
                "w-[150px] h-full sm:w-[250px] text-mc_black",
                classname
            )}
            onClick={() => onNavigate(`/menu-select/${id}`)}
        >
            <div className="flex flex-col items-center justify-center">
                <p className="text-[30px] sm:text-[40px]">{icon}</p>
                <p className="mt-5 text-base sm:text-[24px]">{title}</p>
                <p className="text-sm sm:text-lg">{description}</p>
            </div>
        </Button>
    );
};
