import React, { useEffect } from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ProductBreadCrumb from "./Product/ProductBreadCrumb";
import ProductImage from "./Product/ProductImage";
import ProdcutDetails from "./Product/ProductDetail";
import { fetchProduct } from "../utils/ProductServices";
import Loader from "./Loader";
import { useSearchParams } from "react-router-dom";

// const product = {
//     name: "Basic Tee 6-Pack",
//     price: "$192",
//     href: "#",
//     breadcrumbs: [
//         { id: 1, name: "Men", href: "#" },
//         { id: 2, name: "Clothing", href: "#" },
//     ],
//     images: [
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//             alt: "Two each of gray, white, and black shirts laying flat.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//             alt: "Model wearing plain black basic tee.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//             alt: "Model wearing plain gray basic tee.",
//         },
//         {
//             src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//             alt: "Model wearing plain white basic tee.",
//         },
//     ],
//     colors: [
//         { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//         { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//         { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//     ],
//     sizes: [
//         { name: "XXS", inStock: false },
//         { name: "XS", inStock: true },
//         { name: "S", inStock: true },
//         { name: "M", inStock: true },
//         { name: "L", inStock: true },
//         { name: "XL", inStock: true },
//         { name: "2XL", inStock: true },
//         { name: "3XL", inStock: true },
//     ],
//     description:
//         'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//     highlights: [
//         "Hand cut and sewn locally",
//         "Dyed with our proprietary colors",
//         "Pre-washed & pre-shrunk",
//         "Ultra-soft 100% cotton",
//     ],
//     details:
//         'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProductLayer = () => {
    const [product, setProduct] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParameters = new URLSearchParams(window.location.search);
    const id = searchParams.get("product");
    console.log(id);
    const getProduct = async () => {
        if (id) {
            const response = await fetchProduct(id);
            return response;
        }
    };

    useEffect(() => {
        const getDatas = async () => {
            const data = await getProduct();
            setProduct(data);
        };
        getDatas();
    }, []);
    console.log(product);

    return product ? (
        <div className="bg-white">
            <div className="pt-6">
                {/* <ProductBreadCrumb product={product} /> */}

                <div className="flex flex-row">
                    <ProductImage product={product} />

                    <ProdcutDetails product={product} />
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default ProductLayer;
