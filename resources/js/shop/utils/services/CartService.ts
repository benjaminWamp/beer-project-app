import { Cart } from "../../types/cart.types";
import { User } from "../../types/user.types";

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
                Accept: "application/json"
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

export const deleteOrderItem = async (orderItemId: number) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/user/cart/${orderItemId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
        })

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
}

export const createPaymentIntent = async ({amount, description, receipt_email, metadata} : {amount: number, description: string, receipt_email: string, metadata: number}) => {
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
                receipt_email: receipt_email,
                metadata: metadata
            }),
        });
        const jsonData = await res.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération de la clé :", error);
    }
};

export const updateOrderAddress = async (cart: Cart) => {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/user/cart/${cart.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user}`,
            },
            body: JSON.stringify({
                zip_code: cart.zip_code,
                number: cart.number,
                city: cart.city,
                street: cart.street
            }),
        });
        const jsonData = await res.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la mise à jour du panier :", error);
    }
}
