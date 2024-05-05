export const fetchUserFavorite = async (
    token: string,
    page: number,
    pagination: boolean
) => {
    const searchParams = new URLSearchParams();
    if (pagination) {
        searchParams.set("page", page.toString());
    }

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/favorites${
                pagination
                    ? "?" + "pagination=true&" + searchParams.toString()
                    : ""
            }`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const addToFavorites = async (token: string, productId: number) => {
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/favorites`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ product_id: productId }),
            }
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const deleteFavorites = async (token: string, productId: number) => {
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/favorites/${productId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
