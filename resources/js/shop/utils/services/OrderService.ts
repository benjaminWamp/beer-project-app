import axios from "axios";

export const fetchUserOrders = async (token: string, page: number) => {
    const searchParams = new URLSearchParams();
    if (page) {
        searchParams.set("page", page.toString());
    }
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/user/orders${
                "?" + searchParams.toString()
            }`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
