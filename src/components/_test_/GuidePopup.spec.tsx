import render from "@/utils/test/render";
import GuidePopup from "../GuidePopup";
import { screen } from "@testing-library/react";
import { mockUseGuidePopupStore } from "@/utils/test/mockZustandStore";

beforeEach(() => {
  mockUseGuidePopupStore({ isGuideActive: true });
});

it("가이드 메시지가 올바르게 표시된다.", async () => {
  await render(<GuidePopup messages={["테스트 메시지"]} />);
  expect(screen.getByText("테스트 메시지")).toBeInTheDocument();
});

it("메시지에 \n 개행 문자가 있는 경우 여러 줄의 메시지로 줄바꿈되어 표시된다", async () => {
  await render(<GuidePopup messages={["첫 번째줄\n두 번째 줄"]} />);

  expect(screen.getByTestId("line")).toContainHTML("<br />");
});

it("메시지가 여러 개일 때 다음 버튼이 표시된다.", async () => {
  await render(<GuidePopup messages={["테스트 메시지", "테스트 메시지2"]} />);

  const nextButton = await screen.getByTestId("next-button");

  expect(nextButton).toBeInTheDocument();
});

it("메시지가 하나일 때는 다음 버튼이 표시되지 않는다.", async () => {
  await render(<GuidePopup messages={["테스트 메시지"]} />);

  expect(screen.queryByTestId("next-button")).not.toBeInTheDocument();
});

it("메시지가 여러 개일 때 다음 버튼을 누르면 다음 메시지가 표시된다.", async () => {
  const { user } = await render(
    <GuidePopup messages={["테스트 메시지1", "테스트 메시지2"]} />,
  );

  expect(screen.getByText("테스트 메시지1")).toBeInTheDocument();
  const nextButton = await screen.getByTestId("next-button");

  await user.click(nextButton);
  expect(screen.getByText("테스트 메시지2")).toBeInTheDocument();
});

it("메시지가 여러 개일 때 마지막 메시지에서는 다음 버튼이 표시되지 않는다", async () => {
  const { user } = await render(
    <GuidePopup messages={["첫 번째 메시지", "마지막 메시지"]} />,
  );

  const nextButton = screen.getByTestId("next-button");
  await user.click(nextButton);

  expect(screen.queryByTestId("next-button")).not.toBeInTheDocument();
});

it("가이드가 비활성화되면 컴포넌트가 렌더링되지 않는다", async () => {
  mockUseGuidePopupStore({ isGuideActive: false });

  await render(<GuidePopup messages={["가이드 메시지"]} />);

  expect(screen.queryByText("가이드 메시지")).not.toBeInTheDocument();
});

it("빈 메시지 배열이 전달되면 컴포넌트가 렌더링되지 않는다", async () => {
  await render(<GuidePopup messages={[]} />);

  const popupElement = screen.queryByText("위키");
  expect(popupElement).not.toBeInTheDocument();
});
