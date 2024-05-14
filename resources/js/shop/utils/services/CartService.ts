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

export const addProductToCart = async (token: string, cartItem: any) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/cart", {
            method: "POST", // Méthode de la requête
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            }, // En-têtes de la requête
            body: JSON.stringify(cartItem), // Corps de la requête (converti en JSON)
        });

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
