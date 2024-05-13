import React, { useContext, useEffect, useState } from "react";
import ProductCategories from "./ProdcutCategories";
import ReviewsStars from "../shared/ReviewsStars";
import { Product } from "../../types/product.types";
import UserContext from "../../context/UserContext";
import FavoriteHeart from "../shared/FavoriteHeart";
import { fetchUserFavorite } from "../../utils/services/FavoriteService";
import { Favorite } from "../../types/favorite.types";

interface productListProps {
    products: Array<Product>;
}

const ProductList = (props: productListProps) => {
    const { products } = props;

    const { url } = useContext(UserContext);

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
                            <a href={`#/produit/${product.id}`}>
                                <img
                                    src={`${url}/storage/images/${product.image}`}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </a>
                        </div>
                        <div className="mt-4">
                    
                            <h3 className="font-title font-bold text-sm text-gray-700">
                                <a href={`#/produit/${product.id}`}>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                    ></span>
                                    {product.name}
                                </a>
                            </h3>

                            <div className="flex justify-between">
                                <div>
                                    <ProductCategories categories={categories} />
        
                                    <p className="text-sm font-medium text-gray-900">
                                        {((product.price_ht + 0.2) / 100).toFixed(2)}€
                                    </p>
                                </div>
                                <ReviewsStars review={product.reviews_sum} />
                                <FavoriteHeart productId={product.id} />
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
