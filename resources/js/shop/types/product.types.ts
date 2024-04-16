import { Category } from "./category.types";
import { Manufacturer } from "./manufacturer.types";
import { Review } from "./reviews.types";

export interface Product {
    id: number;
    name: string;
    price_ht: number;
    image: string;
    description: string;
    manufacturer_id: number;
    reviews_sum: number;
    delivered_at: string;
    created_at: string;
    updated_at: string;
    categories: Category[];
    manufacturer: Manufacturer[];
    reviews: Review[];
}
