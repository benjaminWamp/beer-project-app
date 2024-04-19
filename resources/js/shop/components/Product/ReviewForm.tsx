import React, { useContext } from "react";
import UserContext from "../../context/Context";
import { Review } from "../../types/reviews.types";

interface ReviewFormProps {
    onReviewSubmit: (e: any, reviewId?: any) => void;
    isModifing?: boolean;
    review?: Review;
}

const ReviewForm = (props: ReviewFormProps) => {
    const { onReviewSubmit, isModifing, review } = props;
    const { isLogged } = useContext(UserContext);
    return isLogged ? (
        <form
            className="max-w-sm mx-auto"
            onSubmit={(e) => onReviewSubmit(e, review?.id)}
        >
            <label>Donnez une note</label>
            <select name="rating" id="rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <option
                        key={rating}
                        value={rating}
                        selected={rating === review?.stars}
                    >
                        {rating}
                    </option>
                ))}
            </select>
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Laissez un avis
            </label>
            <textarea
                id="review"
                rows={4}
                defaultValue={review?.message}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Votre avis"
            ></textarea>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                {isModifing ? "Modifier" : "Ajouter un avis"}
            </button>
        </form>
    ) : (
        <h3>Veillez vous connecter pour laisser un avis</h3>
    );
};

export default ReviewForm;
