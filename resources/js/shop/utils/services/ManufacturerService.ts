export const fetchManufacturers = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/manufacturers");

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
