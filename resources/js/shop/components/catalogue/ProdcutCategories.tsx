import React from "react";
import { Category } from "../../types/category.types";

interface ProductCategoriesProps {
    categories: Array<Category>;
}

const ProductCategories = (props: ProductCategoriesProps) => {
    const { categories } = props;

    return categories.map((category, index) => (
        <p
            className={`font-title mt-1 text-xs text-${category.color}-600 pr-2`}
            key={`category-${index}`}
        >
            {category.name}
        </p>
    ));
};

export default ProductCategories;
