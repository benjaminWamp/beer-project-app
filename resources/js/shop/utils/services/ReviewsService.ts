import axios from "axios";

const user = localStorage.getItem("token");

//TO USE
export const fetchUserReviews = async (user) => {
    return await axios
        .get("http://127.0.0.1:8000/api/user/reviews", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
        })
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

//OLD
export const fetchProductReviews = async (productId: string) => {
    return axios
        .get(`http://127.0.0.1:8000/api/product/${productId}/reviews`)
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

export const addProductReviews = async (reviewData) => {
    return await axios
        .post(`http://127.0.0.1:8000/api/user/reviews`, reviewData, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${user}`,
            },
        })
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

export const updateProductReviews = async (reviewData, reviewId) => {
    return await axios
        .post(
            `http://127.0.0.1:8000/api/user/reviews/${reviewId}`,
            reviewData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        )
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};

export const deleteProductReviews = async (reviewId) => {
    return await axios
        .delete(`http://127.0.0.1:8000/api/user/reviews/${reviewId}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${user}`,
            },
        })
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};
