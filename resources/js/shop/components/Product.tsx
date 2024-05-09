import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import ProductImage from "./Product/ProductImage";
import ProdcutDetails from "./Product/ProductDetail";
import { fetchProduct } from "../utils/services/ProductServices";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import {
    addProductReviews,
    deleteProductReviews,
    updateProductReviews,
} from "../utils/services/ReviewsService";
import ProductReview from "./Product/ProductReview";
import { Product } from "../types/product.types";
import ReviewForm from "./Product/ReviewForm";
import UserContext from "../context/UserContext";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProductLayer = () => {
    const [product, setProduct] = useState<Product>();
    const [isModifing, setIsModifing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { userId } = useContext(UserContext);

    const { id } = useParams();

    const getDatas = async () => {
        const productData = await fetchProduct(id!);

        setProduct(productData);
        setIsModifing(false);
        setIsLoading(false);
    };
    useEffect(() => {
        getDatas();
    }, []);

    const divRef = useRef<HTMLDivElement>(null);

    const handleScrollToReviews = (e) => {
        e.preventDefault();
        if (divRef.current) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleReviewSubmit = async (e, reviewId?) => {
        e.preventDefault();
        setIsLoading(true);
        const newReviewData = {
            stars: e.target.rating.value,
            message: e.target.review.value,
            product_id: product?.id?.toString(),
        };
        if (!isModifing) {
            await addProductReviews(newReviewData);
        } else {
            await updateProductReviews(newReviewData, reviewId);
        }

        await getDatas();
    };

    const handleDeleteReview = async (reviewId: number) => {
        setIsLoading(true);
        await deleteProductReviews(reviewId);
        await getDatas();
    };

    const hasAReview =
        product?.reviews.some(
            (review) => review.user_id === parseInt(userId!)
        ) || false;

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
                {!isLoading && !isModifing && !hasAReview && (
                    <>
                        <h2>Votre avis</h2>
                        <ReviewForm onReviewSubmit={handleReviewSubmit} />
                    </>
                )}
                {!isLoading &&
                    product.reviews &&
                    product.reviews.length > 0 && (
                        <div ref={divRef}>
                            <ProductReview
                                reviews={product.reviews}
                                onReviewSubmit={handleReviewSubmit}
                                isModifing={isModifing}
                                setIsModifing={setIsModifing}
                                onDeleteReview={handleDeleteReview}
                            />
                        </div>
                    )}
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default ProductLayer;
