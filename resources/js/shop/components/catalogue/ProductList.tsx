import React from "react";
import ProductCategories from "./ProdcutCategories";
import { CatalogueProduct } from "../../types/Catalogue.types";
import ReviewsStars from "../shared/ReviewsStars";

interface productListProps {
    products: Array<CatalogueProduct>;
}

const ProductList = (props: productListProps) => {
    const { products } = props;

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => {
                const categories = product.categories;
                return (
                    <div
                        className="group relative"
                        key={`${product.id}-${index}`}
                    >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={`#/produit/${product.id}`}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        ></span>
                                        {product.name}
                                    </a>
                                </h3>
                                <ProductCategories categories={categories} />
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                                {((product.price_ht + 0.2) / 100).toFixed(2)}€
                            </p>
                            <ReviewsStars review={product.reviews_sum} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
