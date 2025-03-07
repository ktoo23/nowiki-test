import MenuList from "@/pages/MenuList";
import render from "@/utils/test/render";
import { screen } from "@testing-library/react";

it("카테고리 목록을 가져온 후 카테고리 필드의 정보들이 올바르게 렌더링된다.", async () => {
  await render(<MenuList />);

  expect(screen.getByRole("button", { name: "버거" }));
  expect(screen.getByRole("button", { name: "치킨" }));
  expect(screen.getByRole("button", { name: "사이드" }));
});

it("카테고리를 클릭할 경우의 클릭한 카테고리가 활성화된다.", async () => {
  // 카테고리 클릭 -> 선택한 카테고리 버튼 색상이 bg-[#F8F8F8] -> bg-mc_yellow로 변경
  const { user } = await render(<MenuList />);

  const chicken = await screen.getByRole("button", { name: "치킨" });

  expect(chicken.className).toContain("bg-[#F8F8F8]");

  await user.click(chicken);

  expect(chicken.className).not.toContain("bg-[#F8F8F8]");
});

it("버거 카테고리를 클릭하면 맛 필터가 표시된다.", async () => {
  const { user } = await render(<MenuList />);

  const burger = await screen.getByRole("button", { name: "버거" });
  const chicken = await screen.getByRole("button", { name: "치킨" });

  await user.click(burger);

  expect(screen.getByText("햄버거 맛 카테고리"));
  expect(screen.getByText("달달"));
  expect(screen.getByText("짭짤"));
  expect(screen.getByText("매콤"));

  await user.click(chicken);

  expect(screen.queryByText("햄버거 맛 카테고리")).not.toBeInTheDocument();
});
