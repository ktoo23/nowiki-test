import MenuList from "@/pages/MenuList";
import render from "@/utils/test/render";
import { screen } from "@testing-library/react";
import FilteredMenuList from "../FilteredMenuList";
import { items } from "@/__mocks__/response/items.json";
import { mockUseGuidePopupStore } from "@/utils/test/mockZustandStore";

const navigateFn = vi.fn();
vi.mock("react-router-dom", async () => {
  const original = await vi.importActual("react-router-dom");

  return {
    ...original,
    useNavigate: () => navigateFn,
    useLocation: () => {
      pathname: "pathname";
    },
  };
});

it('"음성으로 주문하기" 버튼을 클릭할 경우 /voice-test 경로로 navigate가 호출된다.', async () => {
  const { user } = await render(<MenuList />);

  const voiceBtn = await screen.getByRole("button", {
    name: "음성으로 주문하기",
  });

  await user.click(voiceBtn);

  expect(navigateFn).toHaveBeenNthCalledWith(1, "/voice-test");
});

it('"장바구니" 버튼을 클릭할 경우 "/order-history" 경로로 navigate가 호출된다.', async () => {
  const { user } = await render(<MenuList />);

  const cartBtn = await screen.getByRole("button", {
    name: "장바구니",
  });

  await user.click(cartBtn);

  expect(navigateFn).toHaveBeenNthCalledWith(1, "/order-history");
});

describe("가이드 메시지 활성화를 한 경우", () => {
  beforeEach(() => {
    mockUseGuidePopupStore({ isGuideActive: true });
  });

  it("초기 페이지 진입 시 위키의 메시지가 노출된다.", async () => {
    await render(<MenuList />);

    expect(screen.getByText("위키")).toBeInTheDocument();
  });
});

it("사이드바 카테고리 목록을 가져온 후 카테고리 필드의 정보들이 올바르게 렌더링된다.", async () => {
  await render(<MenuList />);

  expect(screen.getByRole("button", { name: "버거" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "사이드" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "음료" })).toBeInTheDocument();
});

it("사이드바 카테고리를 클릭할 경우의 클릭한 카테고리가 활성화된다.", async () => {
  // 카테고리 클릭 -> 선택한 카테고리 버튼 색상이 bg-[#F8F8F8] -> bg-mc_yellow로 변경
  const { user } = await render(<MenuList />);

  const side = await screen.getByRole("button", { name: "사이드" });

  expect(side.className).toContain("bg-[#F8F8F8]");

  await user.click(side);

  expect(side.className).not.toContain("bg-[#F8F8F8]");
});

it("버거 카테고리를 클릭하면 주재료 카테고리 필터의 정보들이 올바르게 표시된다.", async () => {
  const { user } = await render(<MenuList />);

  const burger = await screen.getByRole("button", { name: "버거" });
  const side = await screen.getByRole("button", { name: "사이드" });

  await user.click(burger);
  expect(screen.getByText("비프")).toBeInTheDocument();
  expect(screen.getByText("불고기")).toBeInTheDocument();
  expect(screen.getByText("해물")).toBeInTheDocument();

  await user.click(side);

  expect(screen.queryByText("비프")).not.toBeInTheDocument();
});

it("버거 카테고리를 클릭하면 맛 필터가 표시된다.", async () => {
  const { user } = await render(<MenuList />);

  const burger = await screen.getByRole("button", { name: "버거" });
  const side = await screen.getByRole("button", { name: "사이드" });

  await user.click(burger);

  expect(screen.getByText("햄버거 맛 카테고리")).toBeInTheDocument();
  expect(screen.getByText("달달")).toBeInTheDocument();
  expect(screen.getByText("짭짤")).toBeInTheDocument();
  expect(screen.getByText("매콤")).toBeInTheDocument();

  await user.click(side);

  expect(screen.queryByText("햄버거 맛 카테고리")).not.toBeInTheDocument();
});

it("카테고리에 해당하는 버거가 없으면 '선택하신 조건에 맞는 버거가 없어요.' 메시지가 보인다.", async () => {
  await render(<FilteredMenuList items={[]} />);

  expect(
    screen.getByText("선택하신 조건에 맞는 버거가 없어요."),
  ).toBeInTheDocument();
});

it("필터링된 아이템 리스트의 이름, 금액이 모두 노출된다", async () => {
  await render(<FilteredMenuList items={items} />);

  expect(screen.getByText("빅맥")).toBeInTheDocument();
  expect(screen.getByText("7,790원")).toBeInTheDocument();

  expect(screen.getByText("트리플 치즈버거")).toBeInTheDocument();
  expect(screen.getByText("5,900원")).toBeInTheDocument();
});
