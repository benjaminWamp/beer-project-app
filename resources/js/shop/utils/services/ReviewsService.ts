const user = localStorage.getItem("token");

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

        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const addProductReviews = async (reviewData) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify(reviewData),
    };
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/reviews`,
            options
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const updateProductReviews = async (reviewData, reviewId) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify(reviewData),
    };
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/reviews/${reviewId}`,
            options
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const deleteProductReviews = async (reviewId) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user}`,
        },
    };
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/reviews/${reviewId}`,
            options
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
