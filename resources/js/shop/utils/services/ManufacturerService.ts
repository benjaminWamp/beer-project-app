import axios from "axios";

export const fetchManufacturers = async () => {
    return await axios
        .get("http://127.0.0.1:8000/api/manufacturers")
        .then((response) => response.data)
        .catch((error) =>
            console.error("Erreur lors de la récupération des données:", error)
        );
};
