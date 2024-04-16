export interface Review {
    id: number;
    stars: number;
    message: string;
    product_id: number;
    user_id: number;
    user: { id: number; name: string };
    created_at: string;
    updated_at: string;
}
