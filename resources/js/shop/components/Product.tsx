import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ProductBreadCrumb from "./Product/ProductBreadCrumb";
import ProductImage from "./Product/ProductImage";
import ProdcutDetails from "./Product/ProductDetail";
import { fetchProduct } from "../utils/services/ProductServices";
import Loader from "./Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchProductReviews } from "../utils/services/ReviewsService";
import ProductReview from "./Product/ProductReview";
import { Product } from "../types/product.types";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProductLayer = () => {
    const [product, setProduct] = useState<Product>();

    const queryParameters = new URLSearchParams(window.location.search);

    const { id } = useParams();

    const getProduct = async () => {
        if (id) {
            const response = await fetchProduct(id);
            return response;
        }
    };

    useEffect(() => {
        const getDatas = async () => {
            const productData = await getProduct();
            setProduct(productData);
        };
        getDatas();
    }, []);

    const divRef = useRef<HTMLDivElement>(null);

    const handleScrollToReviews = (e) => {
        e.preventDefault();
        if (divRef.current) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return product ? (
        <div className="bg-white">
            <div className="pt-6">
                {/* <ProductBreadCrumb product={product} /> */}

                <div className="flex flex-row">
                    <ProductImage product={product} />

                    <ProdcutDetails
                        product={product}
                        onScrollToReviews={handleScrollToReviews}
                    />
                </div>
                <div ref={divRef}>
                    <ProductReview reviews={product.reviews} />
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default ProductLayer;
