export const fetchData = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/catalogue");
        
        const jsonData = await response.json();
        console.log("jsondata", jsonData);
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
