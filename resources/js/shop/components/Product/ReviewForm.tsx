import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
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
        <div>
            <h2 className="text-center font-title font-bold text-4xl text-accent mb-4">
                Laissez un avis !
            </h2>
            <form
                className="max-w-sm mx-auto mb-24"
                onSubmit={(e) => onReviewSubmit(e, review?.id)}
            >
                <div className="flex gap-4 items-center text-l font-title text-accent">
                    <label>Donnez une note</label>
                    <select name="rating" id="rating" className="bg-gray-50 border border-accent/50 text-accent text-sm rounded-lg focus:ring-accent focus:border-accent p-2.5">
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
                </div>
                <label
                    htmlFor="message"
                    className="font-title text-accent text-l block mb-2 text-sm font-medium"
                >
                    Commentaire (optionnel)
                </label>
                <textarea
                    id="review"
                    rows={4}
                    defaultValue={review?.message}
                    className="w-full bg-gray-50 border border-accent/50 text-accent text-sm rounded-lg focus:ring-accent focus:border-accent p-2.5"
                    placeholder="Votre avis"
                    minLength={10}
                ></textarea>
                <button
                    type="submit"
                    className="w-full rounded-md transition-all text-xl inline-block font-title font-bold border-2 py-4 px-10 shadow-buttonDarkBase hover:shadow-buttonDarkHover hover:text-secondary text-accent border-accent"
                >
                    {isModifing ? "Modifier" : "Ajouter un avis"}
                </button>
            </form>
        </div>
    ) : (
        <h3>Veuillez vous connecter pour laisser un avis</h3>
    );
};

export default ReviewForm;
