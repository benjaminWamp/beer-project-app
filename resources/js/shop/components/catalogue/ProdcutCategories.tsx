import React from "react";
import { Category } from "../../types/category.types";

interface ProductCategoriesProps {
    categories: Array<Category>;
}

const ProductCategories = (props: ProductCategoriesProps) => {
    const { categories } = props;

    return categories.map((category, index) => (
        <p className="mt-1 text-sm text-gray-500" key={`category-${index}`}>
            {category.name}
        </p>
    ));
};

export default ProductCategories;
