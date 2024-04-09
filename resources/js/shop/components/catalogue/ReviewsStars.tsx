import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

interface ReviewsStarsProps {
    reviews: number;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const ReviewsStars = (props: ReviewsStarsProps) => {
    const { reviews } = props;

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => {
                    return (
                        <StarIcon
                            key={rating}
                            className={classNames(
                                reviews > rating
                                    ? "text-yellow-600"
                                    : "text-gray-600",
                                "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ReviewsStars;
