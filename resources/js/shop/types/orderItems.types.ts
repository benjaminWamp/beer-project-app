import { Product } from "./product.types";

export interface OrderItem {
    id: number,
    quantity: number,
    price_ht: number,
    product_id: number,
    order_id: number,
    created_at: Date,
    updated_at: Date,
    product: Product
}