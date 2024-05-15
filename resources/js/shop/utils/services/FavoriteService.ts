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

    try {
        const response = await axios.get(
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
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const addToFavorites = async (token: string, productId: number) => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/api/user/favorites`,
            { product_id: productId },
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

export const deleteFavorites = async (token: string, productId: number) => {
    try {
        const response = await axios.delete(
            `http://127.0.0.1:8000/api/user/favorites/${productId}`,
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
