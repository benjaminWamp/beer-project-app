export const fetchUserFavorite = async (user) => {
    console.log("fetchuserCOUCOU");
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/api/user/favorites",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );

        const jsonData = await response.json();
        console.log("userFavoriteCOUCOU", jsonData);
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
