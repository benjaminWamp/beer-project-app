import axios from "axios";

export const fetchProduct = async (id: string) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/product/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
