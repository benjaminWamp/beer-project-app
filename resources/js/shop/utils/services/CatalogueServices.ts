import axios from "axios";

export const fetchProducts = async (
    page: number,
    categories?: string[],
    manufacturers?: string[],
    sorting?: string,
    order?: string,
    search?: string
) => {
    const searchParams = new URLSearchParams();

    if (categories) {
        categories.forEach((category) =>
            searchParams.append("categories[]", category)
        );
    }
    if (manufacturers) {
        manufacturers.forEach((manufacturer) => {
            const encodedValue = encodeURIComponent(manufacturer);
            return searchParams.append(`manufacturer[]`, encodedValue);
        });
    }
    if (sorting) {
        searchParams.set("sorting", sorting);
    }
    if (order) {
        searchParams.set("order", order);
    }
    if (search) {
        searchParams.set("search", search);
    }

    searchParams.set("page", page.toString());
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/catalogue?${searchParams.toString()}`
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
