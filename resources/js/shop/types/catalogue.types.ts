import { Category } from "./category.types";
import { Manufacturer } from "./manufacturer.types";

export interface CatalogueProduct {
    id: number;
    categories: Array<Category>;
    description: string;
    image: string;
    manufacturer: Array<Manufacturer>;
    manufacturer_id: number;
    name: string;
    price_ht: number;
    reviews_sum: number;
    stock: number;
    created_at: string;
    delivered_at: string;
    updated_at: string;
}
