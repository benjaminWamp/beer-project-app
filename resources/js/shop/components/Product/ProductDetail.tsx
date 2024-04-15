import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

interface ProdcutDetailProps {
    product: any;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProdcutDetails = (props: ProdcutDetailProps) => {
    const { product } = props;
    const reviews = { href: "#", average: 4, totalCount: 117 };
    const [selectedQuantity, setselectedQuantity] = useState(1);
    const [selectedQuantityType, setselectedQuantityType] = useState(1);

    const [addedProduct, setAddedProduct] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value * e.target.quantityType.value;
        setAddedProduct({ product_id: 1, quantity: quantity });
    };

    console.log(addedProduct);
    return (
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6  lg:size-3/6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                    {((product.price_ht + 0.2) / 100).toFixed(2)} €
                </p>

                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    {product.categories.map((category) => {
                        <h3>{category.name}</h3>;
                    })}
                </div>

                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={classNames(
                                        product.reviews_sum > rating
                                            ? "text-gray-900"
                                            : "text-gray-200",
                                        "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <p className="sr-only">
                            {reviews.average} out of 5 stars
                        </p>
                    </div>
                </div>

                <form className="mt-10" onSubmit={(e) => handleSubmit(e)}>
                    <label
                        htmlFor="quantity"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Selectionnez une quantité :
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        max="100"
                        aria-describedby="Selectionnez une quantité"
                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={selectedQuantity}
                        onChange={(e) => {
                            e.preventDefault();
                            setselectedQuantity(parseInt(e.target.value));
                        }}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="1" selected>
                            Bouteille
                        </option>
                        <option value="6">Pack (6 Bouteilles)</option>
                        <option value="120">Palette (120 Bouteilles)</option>
                        <option value="720">Camion (720 Bouteilles)</option>
                        <option value="5000">Citerne (5000 Bouteilles)</option>
                    </select>

                    <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Ajouter au panier
                    </button>
                </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdcutDetails;
