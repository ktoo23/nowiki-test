import { OrderInfo } from "../types/order.interface";

// 로컬 스토리지 키
const LOCAL_STORAGE_KEY = "orderInfo";

// 로컬 스토리지에서 데이터 읽기
export const getOrderInfo = (): Partial<OrderInfo> => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : {};
};

// 로컬 스토리지에 데이터 저장
const saveOrderInfo = (
  key: keyof OrderInfo,
  value: OrderInfo[keyof OrderInfo]
): void => {
  const currentData = getOrderInfo();
  const updatedData = { ...currentData, [key]: value };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
};

// orderInfo를 업데이트하는 함수
export const setOrderInfo = <K extends keyof OrderInfo>(
  key: K,
  value: OrderInfo[K]
): void => {
  saveOrderInfo(key, value); // 로컬 스토리지에 저장
};

// 주문 완료 시 데이터 조합 후 전송
export const completeOrder = (): void => {
  const finalOrder = getOrderInfo();
  if (
    finalOrder.isTakeOut !== undefined &&
    finalOrder.orderItem !== undefined &&
    finalOrder.isTableService !== undefined &&
    finalOrder.payMethod !== undefined
  ) {
    // 주문 데이터를 서버로 전송
    // 예외처리 추후 고민
    return console.log("Sending order to server:", finalOrder);
  }
  console.error("Order information is incomplete!");
};
