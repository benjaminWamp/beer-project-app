import axios from "axios";

export const fetchUserFavorite = async (
    token: string,
    page: number,
    pagination: boolean
) => {
    const searchParams = new URLSearchParams();
    if (pagination) {
        searchParams.set("page", page.toString());
    }

    return axios
        .get(
            `http://127.0.0.1:8000/api/user/favorites${
                pagination
                    ? "?" + "pagination=true&" + searchParams.toString()
                    : ""
            }`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

export const addToFavorites = async (token: string, productId: number) => {
    return axios
        .post(
            `http://127.0.0.1:8000/api/user/favorites`,
            { product_id: productId },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

export const deleteFavorites = async (token: string, productId: number) => {
    return axios
        .delete(`http://127.0.0.1:8000/api/user/favorites/${productId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};
