import { OrderItem } from "./orderItems.types";

export interface Order {
    status: string;
    total: number;
    number: number;
    street: string;
    city: string;
    zip_code: string;
    order_items: OrderItem[];
}
