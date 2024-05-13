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
import AlertContext from "../context/AlertContext";
import ProductSkeleton from "./skeletons/ProductSkeleton";

const ProductLayer = () => {
    const [product, setProduct] = useState<Product>();
    const [isModifing, setIsModifing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { userId } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);

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
            try {
                const response = await addProductReviews(newReviewData);
                addAlert("success", response.message);
            } catch (err) {
                addAlert("failure", err);
            }
        } else {
            try {
                const response = await updateProductReviews(
                    newReviewData,
                    reviewId
                );
                addAlert("success", response.message);
            } catch (err) {
                addAlert("failure", err);
            }
        }

        await getDatas();
    };

    const handleDeleteReview = async (reviewId: number) => {
        setIsLoading(true);
        try {
            const response = await deleteProductReviews(reviewId);
            addAlert("success", response.message);
        } catch (err) {
            addAlert("failure", err);
        }
        await getDatas();
    };

    const hasAReview =
        product?.reviews.some(
            (review) => review.user_id === parseInt(userId!)
        ) || false;

    return product ? (
        <div className="bg-background">
            <div className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                        <ReviewForm onReviewSubmit={handleReviewSubmit} />
                    </>
                )}
                {!isLoading &&
                    product.reviews &&
                    product.reviews.length > 0 && (
                        <div ref={divRef} className="grid grid-cols-3 gap-6">
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
        <ProductSkeleton />
    );
};

export default ProductLayer;
