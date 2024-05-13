import React, { useContext, useEffect, useState } from "react";
import { Review } from "../../types/reviews.types";
import ReviewsStars from "../shared/ReviewsStars";
import { formatDate } from "../../utils/function/DateFormat";
import UserContext from "../../context/UserContext";
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
                    <p className="font-title font-bold text-accent text-2xl">Votre avis</p>
                    <button
                        onClick={() => setIsModifing(true)}
                        className="rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                    >
                        Modifier
                    </button>
                    <button
                        onClick={() => onDeleteReview(userReview.id)}
                        className="rounded-md transition-all text-m inline-block font-title font-bold border-2 py-2 px-4 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
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
