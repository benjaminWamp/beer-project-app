import { Cart } from "../../types/cart.types";
import axios from "axios";

const user = localStorage.getItem("token");

export const addProductToCart = async (token: string, cartItem: any) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/user/cart",
            cartItem,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const fetchCartList = async () => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/user/cart",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const deleteOrderItem = async (orderItemId: number) => {
    try {
        const response = await axios.delete(
            `http://127.0.0.1:8000/api/user/cart/${orderItemId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const createPaymentIntent = async ({
    amount,
    description,
    receipt_email,
    metadata,
}: {
    amount: number;
    description: string;
    receipt_email: string;
    metadata: number;
}) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/paymentIntent",
            {
                amount: amount,
                description: description,
                receipt_email: receipt_email,
                metadata: metadata,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const payedCart = async () => {
    try {
        const response = await axios.post(
            `http://127.0.0.1:8000/api/user/cart/payed`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const updateOrderAddress = async (cart: Cart) => {
    try {
        const response = await axios.put(
            `http://127.0.0.1:8000/api/user/cart/${cart.id}`,
            {
                zip_code: cart.zip_code,
                number: cart.number,
                city: cart.city,
                street: cart.street,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};
