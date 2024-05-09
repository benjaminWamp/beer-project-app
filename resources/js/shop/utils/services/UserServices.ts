import axios from "axios";

export const fetchUser = async (user) => {
    return await axios
        .get("http://127.0.0.1:8000/api/user", {
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

export const updateUser = async (userData, token) => {
    return await axios
        .post("http://127.0.0.1:8000/api/user", userData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response.data.errors;
        });
};

export const updateUserPassword = async (userData, token) => {
    return await axios
        .post("http://127.0.0.1:8000/api/user/password", userData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response.data.errors;
        });
};

export const deleteUser = async (token) => {
    return await axios
        .post(
            "http://127.0.0.1:8000/api/user/delete",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error.response.data.errors;
        });
};

export const registerUser = async (user) => {
    return await axios
        .post("http://127.0.0.1:8000/api/register", user, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response.data.errors;
        });
};
