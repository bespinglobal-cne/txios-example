//request
interface OrderDTO {
  service_name: string;
  payload: {
    Combine: {
      index: number;
    };
  };
}

//response
interface OrderResultDTO {
  delivery: Delivery;
  payment: Payment;
  stock: Stock;
  order: Order;
}

interface Order {
  combine: CombinePayload;
  Order: OrderPayload;
}
interface Delivery {
  Delivery: DeliveryPayload;
}

interface Payment {
  Payment: PaymentPayload;
}

interface Stock {
  Stock: StockPayload;
}

interface OrderPayload {
  index: number;
}
interface CombinePayload {
  index: number;
}
interface DeliveryPayload {
  index: number;
}
interface PaymentPayload {
  index: number;
}
interface StockPayload {
  index: number;
}
export type { OrderDTO, OrderResultDTO };
