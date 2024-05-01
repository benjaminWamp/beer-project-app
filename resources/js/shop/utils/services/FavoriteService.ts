export const fetchUserFavorite = async (token: string, page: number) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", page.toString());

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/user/favorites?${searchParams.toString()}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
