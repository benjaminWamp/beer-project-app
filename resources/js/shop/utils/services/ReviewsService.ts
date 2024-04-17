export const fetchUserReviews = async (user) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/reviews", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
        });

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const fetchProductReviews = async (productId: string) => {
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/product/${productId}/reviews`
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
