import { UserLogin } from "../../types/user.types";
import axios from "axios";

export const loginUser = async (userInfo: UserLogin) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/login",
            userInfo
        );
        return response.data;
    } catch (error) {
        throw (Object.values(error.response.data.errors)[0] as string[])[0];
    }
};

export const logoutUser = async (token: string) => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/logout",
            {},
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
