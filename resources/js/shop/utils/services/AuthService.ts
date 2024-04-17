import { UserLogin } from "../../types/user.types";

const userData = {
    email: "cecile.valente@email.com",
    password: "password",
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
        console.log(jsonData);
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
