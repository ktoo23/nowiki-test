import { useNavigate } from "react-router-dom";

const PaymentSelect = () => {
  const naviate = useNavigate();

  const navigateToCardPayment = () => {
    naviate("/card-payment");
  };

  return (
    <>
      <h1>결제 방법을 선택해주세요</h1>
      <button>모바일 상품권</button>
      <button onClick={navigateToCardPayment}>카드 결제</button>
    </>
  );
};

export default PaymentSelect;
