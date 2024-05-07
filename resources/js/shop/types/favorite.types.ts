import { Product } from "./product.types";

export interface Favorite {
    id: number;
    product_id: number;
    product: Product;
    user_id: number;
    created_at: string;
    updated_at: string;
}
