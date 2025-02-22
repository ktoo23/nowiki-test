import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

type RenderOptions = {
  routerProps?: MemoryRouterProps; // ✅ MemoryRouter의 props 타입 적용
};

export default async (component: any, options: RenderOptions = {}) => {
  const { routerProps } = options;
  const user = userEvent.setup();
  return {
    user, // 🔥 `userEvent`를 함께 반환하여 이벤트 테스트 가능!
    ...render(<MemoryRouter {...routerProps}>{component}</MemoryRouter>),
  };
};
