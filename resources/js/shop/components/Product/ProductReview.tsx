import React, { useContext, useEffect, useState } from "react";
import { Review } from "../../types/reviews.types";
import ReviewsStars from "../shared/ReviewsStars";
import { formatDate } from "../../utils/function/DateFormat";
import UserContext from "../../context/Context";
import ReviewComponent from "../shared/Review";
import ReviewForm from "./ReviewForm";

interface ProductReviewProps {
    reviews: Review[];
    onReviewSubmit: (e) => void;
    onDeleteReview: (reviewId: number) => void;
    isModifing: boolean;
    setIsModifing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductReview = (props: ProductReviewProps) => {
    const {
        reviews,
        onReviewSubmit,
        onDeleteReview,
        isModifing,
        setIsModifing,
    } = props;
    const { userId } = useContext(UserContext);
    const [userReview, setUserReview] = useState<Review | undefined>(undefined);
    const [remainingReviews, setRemainingReviews] = useState<Review[]>([]);

    useEffect(() => {
        // Trouver et retirer l'avis de l'utilisateur spécifié
        const tempReview = [...reviews];

        const index = tempReview.findIndex(
            (review) => review.user_id === parseInt(userId!)
        );

        if (index !== -1) {
            const removedReview = tempReview.splice(index, 1)[0];
            setUserReview(removedReview);
            setRemainingReviews(tempReview);
        } else {
            setRemainingReviews(tempReview);
        }
    }, [reviews, userId]);

    return (
        <>
            {userReview && !isModifing && (
                <>
                    <p>Votre avis</p>
                    <button
                        onClick={() => setIsModifing(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Modifier
                    </button>
                    <button
                        onClick={() => onDeleteReview(userReview.id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Supprimer
                    </button>
                    <ReviewComponent review={userReview} />
                </>
            )}
            {isModifing && (
                <ReviewForm
                    onReviewSubmit={onReviewSubmit}
                    isModifing={isModifing}
                    review={userReview}
                />
            )}
            {remainingReviews.map((review) => (
                <ReviewComponent key={review.id} review={review} />
            ))}
        </>
    );
};

export default ProductReview;
