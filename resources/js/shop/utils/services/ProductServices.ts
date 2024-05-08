import axios from "axios";

export const fetchProduct = async (id: string) => {
    return axios
        .get(`http://127.0.0.1:8000/api/product/${id}`)
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};
