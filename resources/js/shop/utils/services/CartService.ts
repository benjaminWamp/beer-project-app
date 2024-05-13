import {fetchUser} from "./UserServices";

const userData = {
    email: "cecile.valente@email.com",
    password: "password",
};

const options = {
    method: "POST", // Méthode de la requête
    headers: { "Content-Type": "application/json" }, // En-têtes de la requête
    body: JSON.stringify(userData), // Corps de la requête (converti en JSON)
};

const user = localStorage.getItem("token");

export const addProductToCart = async (cartItem: any) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/cart", {
            method: "POST", // Méthode de la requête
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            }, // En-têtes de la requête
            body: JSON.stringify(cartItem), // Corps de la requête (converti en JSON)
        });

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};

export const fetchCartList = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/cart", {
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

export const createPaymentIntent = async ({amount, description, customer} : {amount: number, description: string, customer: number}) => {
    console.log("services :",amount, description, customer);
    const userFind = fetchUser(user)
    console.log('userFind',userFind)
    try {
        const res = await fetch("http://127.0.0.1:8000/api/paymentIntent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
            body: JSON.stringify({
                amount: amount,
                description: description,
                // customer: customer
            }),
        });
        const jsonData = await res.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération de la clé :", error);
    }
};
