// {{URL}}/catalogue?categories[]=3&categories[]=2&manufacturer[]=1&manufacturer[]=2&sorting=created_at&order=desc
// searchParams.set("topic", "More webdev");

export const fetchProducts = async (
    page: number,
    categories?: string[],
    manufacturers?: string[],
    sorting?: string,
    order?: string
) => {
    const url = "catalogue";
    const searchParams = new URLSearchParams();

    if (categories) {
        categories.forEach((category) =>
            searchParams.set("categories[]", category)
        );
    }
    if (manufacturers) {
        console.log(manufacturers);
        manufacturers.forEach((manufacturer) =>
            searchParams.set("manufacturer[]", manufacturer)
        );
    }
    if (sorting) {
        console.log("sorting", sorting);
        searchParams.set("sorting", sorting);
    }
    if (order) {
        searchParams.set("order", order);
    }
    searchParams.set("page", "1");
    console.log(searchParams.toString());
    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/catalogue?${searchParams.toString()}`
        );

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
};
