import { OrderItem } from './orderItems.types';

export interface Cart {
        id: number,
        status: string,
        total: number,
        number: number,
        street: string,
        city: string,
        zip_code: string,
        user_id: number,
        created_at: Date,
        updated_at: Date,
        order_items: OrderItem[]
}