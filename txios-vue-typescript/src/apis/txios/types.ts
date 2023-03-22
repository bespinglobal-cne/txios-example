// 구매 요청 Payload
interface Order {
  service_name: string;
  payload: {
    Combine: {
      index: number;
    };
  };
}
// 트랜잭션 응답 Payload
interface OrderResult {
  Combine: { index: number };
  Delivery: { index: number };
  Order: { index: number };
  Payment: { index: number };
  Stock: { index: number };
}
export type { Order, OrderResult };
