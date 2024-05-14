import React, { useState, useContext } from "react";
import ReviewsStars from "../shared/ReviewsStars";
import { Product } from "../../types/product.types";
import { addProductToCart } from "../../utils/services/CartService";
import { Button } from "flowbite-react";
import { Mode } from "../../types/style.enum";
import UserContext from "../../context/UserContext";
import FavoriteHeart from "../shared/FavoriteHeart";
import AlertContext from "../../context/AlertContext";

interface ProdcutDetailProps {
    product: Product;
    onScrollToReviews: (_: any) => void;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProdcutDetails = (props: ProdcutDetailProps) => {
    const { product, onScrollToReviews } = props;
    const { categories } = product;
    const { reviews } = product;
    const { token, isLogged } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogged && token) {
            const quantity =
                e.target.quantity.value * e.target.quantityType.value;
            if (quantity <= product.stock) {
                const addedProduct = {
                    product_id: product.id,
                    quantity: quantity,
                };
                await addProductToCart(token, addedProduct);
            } else {
                addAlert(
                    "failure",
                    "Le produit est en rupture de stock ou vous avez séléctionner une trop grande quantité"
                );
            }
        } else {
            addAlert(
                "warning",
                "Veuillez vous connecter pour effectuer cette action"
            );
        }
    };

    return (
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6  lg:size-3/6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-3xl font-title text-accent font-bold">
                    {product.name}
                </h1>
            </div>
            <FavoriteHeart productId={product.id} />

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Informations produit</h2>
                <p className="mt-4 text-xl font-title font-bold text-accent">
                    {((product.price_ht + 0.2) / 100).toFixed(2)} €
                </p>

                <p className="text-sm font-title font-bold tracking-tight text-accent">
                    {product.stock > 0 ? (
                        <span className="text-[#009942]">En stock</span>
                    ) : (
                        <span className="text-[#a50f0f]">
                            En rupture de stock
                        </span>
                    )}
                </p>

                {/* Reviews */}
                <div className="my-4">
                    <h3 className="sr-only">Reviews</h3>
                    <ReviewsStars review={product.reviews_sum} />{" "}
                    <a
                        href="#"
                        className="font-title"
                        onClick={(e) => onScrollToReviews(e)}
                    >
                        {reviews.length} avis
                    </a>
                </div>

                <div className="font-title font-bold text-accent lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    {categories.map((category) => (
                        <h3>{category.name}</h3>
                    ))}
                </div>

                <form className="mt-10" onSubmit={(e) => handleSubmit(e)}>
                    <label
                        htmlFor="quantity"
                        className="block mb-2 text-sm font-bold text-accent"
                    >
                        Selectionnez une quantité :
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        max="100"
                        aria-describedby="Selectionnez une quantité"
                        className="mb-4 bg-gray-50 border border-accent/50 text-accent text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
                        defaultValue="1"
                        required
                    />

                    <label
                        htmlFor="quantityType"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white hidden"
                    >
                        Select an option
                    </label>
                    <select
                        id="quantityType"
                        className="mb-4 bg-gray-50 border border-accent/50 text-accent text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
                    >
                        <option value="1" selected>
                            Bouteille
                        </option>
                        <option value="6">Pack (6 Bouteilles)</option>
                        <option value="120">Palette (120 Bouteilles)</option>
                        <option value="720">Camion (720 Bouteilles)</option>
                        <option value="5000">Citerne (5000 Bouteilles)</option>
                    </select>
                    {/* TODO : METTRE EN GRIS LE BUTTON SI ISLOGGED EST FALSE */}
                    <button
                        type="submit"
                        className="w-full rounded-md transition-all text-xl inline-block font-title font-bold border-2 py-4 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                    >
                        Ajouter au panier
                    </button>
                </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1">
                {/* Description and details */}
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-xs text-justify text-gray-900">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdcutDetails;
