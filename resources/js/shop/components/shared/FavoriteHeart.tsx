import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { fetchUserFavorite } from "../../utils/services/FavoriteService";
import { Favorite } from "../../types/favorite.types";
import FavoriteContext from "../../context/FavoriteContext";
import AlertContext from "../../context/AlertContext";

interface FavoriteHeartProps {
    productId: number;
}

const FavoriteHeart = (props: FavoriteHeartProps) => {
    const { productId } = props;

    const { token } = useContext(UserContext);
    const { addAlert } = useContext(AlertContext);
    const { userAllFavorites, handleAddToFavorite, handleDeleteFavorite } =
        useContext(FavoriteContext);

    const isFavorite =
        userAllFavorites &&
        userAllFavorites.find((favorite) => favorite.product_id === productId);

    return (
        <button
            onClick={() => {
                if (token) {
                    if (!isFavorite) {
                        handleAddToFavorite(productId);
                    } else {
                        handleDeleteFavorite(productId);
                    }
                } else {
                    addAlert(
                        "warning",
                        "Veuillez vous connecter pour effectuer cette action"
                    );
                }
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isFavorite ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        </button>
    );
};

export default FavoriteHeart;
