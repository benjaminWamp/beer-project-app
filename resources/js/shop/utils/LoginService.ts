const userData = {
    email: "cecile.valente@email.com",
    password: "password",
};

const options = {
    method: "POST", // Méthode de la requête
    headers: { "Content-Type": "application/json" }, // En-têtes de la requête
    body: JSON.stringify(userData), // Corps de la requête (converti en JSON)
};

export const fetchUser = async () => {
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
