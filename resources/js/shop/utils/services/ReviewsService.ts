import axios from "axios";

export const fetchUserReviews = async (token: string, user) => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/user/reviews",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

//OLD
export const fetchProductReviews = async (productId: string) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/product/${productId}/reviews`
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const addProductReviews = async (token: string, reviewData) => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/api/user/reviews`,
            reviewData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const updateProductReviews = async (
    token: string,
    reviewData,
    reviewId
) => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/api/user/reviews/${reviewId}`,
            reviewData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const deleteProductReviews = async (token: string, reviewId) => {
    try {
        const response = await axios.delete(
            `http://127.0.0.1:8000/api/user/reviews/${reviewId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
