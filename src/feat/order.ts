import { MenuItem, MenuItemWithCount } from "@/types/menu.interface";
import { OrderInfo } from "../types/order.interface";
import useSpeechFeedback from "@/hooks/useSpeechFeedback";

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

export const setItemToOrderInfo = (item: MenuItem) => {
  const localInfo = localStorage.getItem("orderInfo");

  if (!localInfo) {
    return false;
  }
  const { orderItem } = JSON.parse(localInfo) || [];

  if (orderItem) {
    const newOrderItem = [...orderItem];
    const existedItem = newOrderItem.find(
      (i: MenuItemWithCount) => i.id === item.id
    );

    if (existedItem) {
      existedItem.count++;
    } else {
      newOrderItem.push({ ...item, count: 1 });
    }

    return setOrderInfo("orderItem", [...newOrderItem]);
  }

  setOrderInfo("orderItem", [{ ...item, count: 1 }]);
  return true;
};

export const modifyItemFromOrderInfo = (item: MenuItem) => {
  const localInfo = localStorage.getItem("orderInfo");

  if (!localInfo) {
    return false;
  }
  const { orderItem } = JSON.parse(localInfo) || [];

  if (orderItem) {
    let newOrderItem = [...orderItem];
    const existedItem = newOrderItem.find(
      (i: MenuItemWithCount) => i.id === item.id
    );

    if (existedItem && existedItem.count > 1) {
      existedItem.count--;
    } else {
      newOrderItem = newOrderItem.filter(
        (i: MenuItemWithCount) => i.id !== item.id
      );
    }

    return setOrderInfo("orderItem", [...newOrderItem]);
  }

  setOrderInfo("orderItem", [{ ...item, count: 1 }]);
  return true;
};

export const deleteItemFromOrderInfo = (item: MenuItem) => {
  const localInfo = localStorage.getItem("orderInfo");

  if (!localInfo) {
    return false;
  }
  const { orderItem } = JSON.parse(localInfo) || [];

  if (orderItem) {
    let newOrderItem = orderItem.filter(
      (i: MenuItemWithCount) => i.id !== item.id
    );
    return setOrderInfo("orderItem", [...newOrderItem]);
  }
};

// 주문 완료 시 데이터 조합 후 전송
export const completeOrder = () => {
  const { speak } = useSpeechFeedback();
  const finalOrder = getOrderInfo();
  if (checkValidateOrderForm(finalOrder as OrderInfo)) {
    // 주문 데이터를 서버로 전송
    // 예외처리 추후 고민
    speak("결제가 완료되었습니다.");
    return
  }
  alert("주문에 오류가 발생했습니다");
};

const checkValidateOrderForm = (form: OrderInfo) => {
  const orderFormArr = Object.values(form);
  return orderFormArr.every((orderValue) => orderValue !== undefined);
}
