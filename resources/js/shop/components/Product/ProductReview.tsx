import React from "react";
import { Review } from "../../types/reviews.types";
import ReviewsStars from "../shared/ReviewsStars";
import { formatDate } from "../../utils/function/DateFormat";

interface ProductReviewProps {
    reviews: Review[];
}

const ProductReview = (props: ProductReviewProps) => {
    const { reviews } = props;

    return reviews.map((review) => (
        <article>
            <div className="flex items-center mb-4">
                <img
                    className="w-10 h-10 me-4 rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <div className="font-medium dark:text-white">
                    <p>
                        {review.user.name}
                        <time
                            dateTime="2014-08-16 19:00"
                            className="block text-sm text-gray-500 dark:text-gray-400"
                        >
                            le {formatDate(review.updated_at)}
                        </time>
                    </p>
                </div>
            </div>
            <ReviewsStars review={review.stars} />

            <p className="mb-2 text-gray-500 dark:text-gray-400">
                {review.message}
            </p>
        </article>
    ));
};

export default ProductReview;
