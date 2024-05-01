export const fetchUser = async (user) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
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

export const updateUser = async (userDate, token) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
        body: JSON.stringify(userDate),
    };
    try {
        await fetch("http://127.0.0.1:8000/api/user", options);
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
