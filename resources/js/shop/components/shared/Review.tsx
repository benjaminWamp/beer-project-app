import React from "react";
import { Review } from "../../types/reviews.types";
import { formatDate } from "../../utils/function/DateFormat";
import ReviewsStars from "./ReviewsStars";

const ReviewComponent = (props: { review: Review }) => {
    const { review } = props;
    return (
        <article className="mb-10">
            <div className="flex items-center mb-4">
                <img
                    className="w-10 h-10 me-4 rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <div className="font-title font-bold text-accent text-m">
                    <p>
                        {review.user.name}
                        <time
                            dateTime="2014-08-16 19:00"
                            className="block text-sm text-gray-500"
                        >
                            le {formatDate(review.updated_at)}
                        </time>
                    </p>
                </div>
            </div>
            <ReviewsStars review={review.stars} />

            <p className="mt-2 text-accent">
                {review.message}
            </p>
        </article>
    );
};

export default ReviewComponent;
