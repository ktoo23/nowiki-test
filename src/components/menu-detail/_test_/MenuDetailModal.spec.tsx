import render from "@/utils/test/render";
import { screen, within } from "@testing-library/react";

import { beforeEach, describe, expect, it, vi } from "vitest";
import MenuDetailModal from "../MenuDetailModal";

import data from "@/__mocks__/response/menu.json";
import FilteredMenuItem from "@/components/menu-list/FilteredMenuItem";
import { UserEvent } from "@testing-library/user-event";
const navigatedFn = vi.fn();

vi.mock("react-router-dom", async () => {
  const original = await vi.importActual("react-router-dom");

  return { ...original, useNavigate: () => navigatedFn };
});

describe("메뉴 아이템을 클릭하면", () => {
  let userEvent: UserEvent;
  beforeEach(async () => {
    const { user } = await render(<FilteredMenuItem item={data} />);
    userEvent = user;

    const item = await screen.findByRole("listitem");
    await user.click(item);
  });

  it("모달이 렌더링되며, 모달 내에 선택한 아이템 이름이 렌더링된다.", () => {
    const dialog = screen.getByRole("dialog");

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(within(dialog).getByText(data.name)).toBeInTheDocument();
  });

  it("'닫기'버튼을 누르면 모달이 닫힌다.", async () => {
    const cancelBtn = await screen.getByRole("button", { name: "닫기" });

    await userEvent.click(cancelBtn);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("모달이 닫힐 때 `setIsOpen(false)`가 호출된다.", async () => {
    const spy = vi.fn();

    await render(<MenuDetailModal item={data} open={true} setIsOpen={spy} />);

    const closeBtn = screen.getByRole("button", { name: "닫기" });
    await userEvent.click(closeBtn);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it("'선택하기'버튼을 누르면 단품/세트 메뉴 선택 페이지로 이동한다.", async () => {
    const { user } = await render(
      <MenuDetailModal item={data} open={true} setIsOpen={() => {}} />,
    );

    const button = await screen.getByRole("button", { name: "선택하기" });

    await user.click(button);

    expect(navigatedFn).toHaveBeenNthCalledWith(1, `/set-choice/${data.id}`);
  });

  it("처음 메뉴 상세 모달에는 알러지 정보가 보이지 않는다.", async () => {
    await render(
      <MenuDetailModal item={data} open={true} setIsOpen={() => {}} />,
    );

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).queryByText(
        "* 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.",
      ),
    ).not.toBeInTheDocument();
  });

  it("사용자가 알레르기 정보를 토글하면 UI가 변경된다.", async () => {
    const { user } = await render(
      <MenuDetailModal item={data} open={true} setIsOpen={() => {}} />,
    );

    const dialog = screen.getByRole("dialog");
    const toggle = within(dialog).getByTestId("allergen-toggle");

    await user.click(toggle);

    expect(
      within(dialog).queryByText(
        "* 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.",
      ),
    ).toBeInTheDocument();

    await user.click(toggle);

    expect(
      within(dialog).queryByText(
        "* 일부 튀김류 제품은 새우 패티와 같은 조리기구를 사용하고 있습니다.",
      ),
    ).not.toBeInTheDocument();
  });
});
