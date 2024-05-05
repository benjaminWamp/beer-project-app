import { UserLogin } from "../../types/user.types";
import axios from "axios";

const userData = {
    email: "cecile.valente@email.com",
    password: "password",
};

export const loginUserTest = async (userInfo: UserLogin) => {
    return await axios
        .post("http://127.0.0.1:8000/api/login", userInfo)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const loginUser = async (userInfo: UserLogin) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
    };
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/api/login",
            options
        );
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const logoutUser = async () => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/api/logout",
            options
        );

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
