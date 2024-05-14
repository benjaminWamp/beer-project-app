import axios from "axios";

export const fetchUserOrders = async (token: string, page: number) => {
    const searchParams = new URLSearchParams();
    if (page) {
        searchParams.set("page", page.toString());
    }

    return axios
        .get(
            `http://127.0.0.1:8000/api/user/orders${
                "?" + searchParams.toString()
            }`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            throw (Object.values(error.response.data.errors)[0] as string[])[0];
        });
};
