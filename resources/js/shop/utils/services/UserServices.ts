import axios from "axios";

export const fetchUser = async (token: string) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const updateUser = async (userData, token: string) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/user",
            userData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response.data.errors;
    }
};

export const updateUserPassword = async (userData, token) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/user/password",
            userData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response.data.errors;
    }
};

export const deleteUser = async (token) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/user/delete",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response.data.errors;
    }
};

export const registerUser = async (user) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/register",
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
